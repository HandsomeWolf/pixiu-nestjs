import { Controller, Get } from '@nestjs/common';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { TextLoader } from 'langchain/document_loaders/fs/text';
import { DirectoryLoader } from 'langchain/document_loaders/fs/directory';
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { CheerioWebBaseLoader } from '@langchain/community/document_loaders/web/cheerio';
import { z } from 'zod';
import { ChatAlibabaTongyi } from '@langchain/community/chat_models/alibaba_tongyi';
import { AlibabaTongyiEmbeddings } from '@langchain/community/embeddings/alibaba_tongyi';
import {
  StringOutputParser,
  StructuredOutputParser,
  CommaSeparatedListOutputParser,
} from '@langchain/core/output_parsers';
import {
  ChatPromptTemplate,
  PromptTemplate,
  PipelinePromptTemplate,
} from '@langchain/core/prompts';
import { OutputFixingParser } from 'langchain/output_parsers';

@Controller('ai')
export class AiController {
  @Get()
  async findAll() {
    const getCurrentDateStr = () => {
      return new Date().toLocaleDateString();
    };

    function generateGreeting(timeOfDay: string) {
      return () => {
        const date = getCurrentDateStr();
        switch (timeOfDay) {
          case 'morning':
            return date + ' 早上好';
          case 'afternoon':
            return date + ' 下午好';
          case 'evening':
            return date + ' 晚上好';
          default:
            return date + ' 你好';
        }
      };
    }

    const prompt = new PromptTemplate({
      template: '{greeting}!',
      inputVariables: ['greeting'],
    });

    const currentTimeOfDay = 'afternoon';
    const partialPrompt = await prompt.partial({
      greeting: generateGreeting(currentTimeOfDay),
    });

    const formattedPrompt = await partialPrompt.format({});
    console.log(formattedPrompt);
  }

  // 耽搁 Prompt
  @Get('translate')
  async translate() {
    // const translateInstructionTemplate =
    //   SystemMessagePromptTemplate.fromTemplate(
    //     `你是一个专业的翻译员，你的任务是将文本从{source_lang}翻译成{target_lang}。`,
    //   );
    //
    // const userQuestionTemplate =
    //   HumanMessagePromptTemplate.fromTemplate('请翻译这句话：{text}');
    //
    // const chatPrompt = ChatPromptTemplate.fromMessages([
    //   translateInstructionTemplate,
    //   userQuestionTemplate,
    // ]);
    //
    // const formattedChatPrompt = await chatPrompt.formatMessages({
    //   source_lang: '中文',
    //   target_lang: '法语',
    //   text: '你好，世界',
    // });

    // 简写
    const systemTemplate =
      '你是一个专业的翻译员，你的任务是将文本从{source_lang}翻译成{target_lang}。';
    const humanTemplate = '请翻译这句话：{text}';

    const chatPrompt = ChatPromptTemplate.fromMessages([
      ['system', systemTemplate],
      ['human', humanTemplate],
    ]);

    const chatModel = new ChatAlibabaTongyi({
      model: 'qwen-turbo', // Available models: qwen-turbo, qwen-plus, qwen-max
      alibabaApiKey: 'sk-bb6c4ee82b824f7d83634f161d53ecf4',
      temperature: 1,
    });

    const outputPraser = new StringOutputParser();

    const chain = chatPrompt.pipe(chatModel).pipe(outputPraser);

    return await chain.invoke({
      source_lang: '中文',
      target_lang: '英文',
      text: '你好，世界',
    });
  }

  // 组合多个 Prompt
  @Get('housekeeper')
  async housekeeper() {
    const getCurrentDateStr = () => {
      return new Date().toLocaleDateString();
    };

    const fullPrompt = PromptTemplate.fromTemplate(`
你是一个智能管家，今天是 {date}，你的主人的信息是{info}, 
根据上下文，完成主人的需求
{task}
`);

    const datePrompt = PromptTemplate.fromTemplate('{date}，现在是 {period}');

    const periodPrompt = await datePrompt.partial({
      date: getCurrentDateStr,
    });

    const infoPrompt = PromptTemplate.fromTemplate(`
    姓名是 {name}, 性别是 {gender}
    `);

    const taskPrompt = PromptTemplate.fromTemplate(`
      我想吃 {period} 的 {food}。 
      再重复一遍我的信息 {info}
      `);

    const composedPrompt = new PipelinePromptTemplate({
      pipelinePrompts: [
        {
          name: 'date',
          prompt: periodPrompt,
        },
        {
          name: 'info',
          prompt: infoPrompt as any,
        },
        {
          name: 'task',
          prompt: taskPrompt,
        },
      ],
      finalPrompt: fullPrompt,
    });

    const formattedPrompt = await composedPrompt.format({
      period: '早上',
      name: '张三',
      gender: '男',
      food: '柠檬',
    });

    console.log(formattedPrompt);
    return formattedPrompt;
  }

  @Get('answer')
  async answer() {
    const schema = z.object({
      answer: z.string().describe('用户问题的答案'),
      confidence: z
        .number()
        .min(0)
        .max(100)
        .describe('问题答案的可信度评分，满分 100'),
    });
    // console.log(schema);

    const parser = StructuredOutputParser.fromZodSchema(
      schema,
      // {
      //   answer: '用户问题的答案',
      //   evidence: '你回答用户问题所依据的答案',
      //   confidence: '问题答案的可信度评分，格式是百分数',
      // },
    );

    const prompt = PromptTemplate.fromTemplate(
      '尽可能的回答用的问题 \n{instructions} \n{question}',
    );

    const model = new ChatAlibabaTongyi({
      alibabaApiKey: 'sk-bb6c4ee82b824f7d83634f161d53ecf4',
    });

    const chain = prompt.pipe(model).pipe(parser);
    // const res = await chain.invoke({
    //   question: '蒙娜丽莎的作者是谁？是什么时候绘制的',
    //   instructions: parser.getFormatInstructions(),
    // });
    const res = await chain.stream({
      question: '蒙娜丽莎的作者是谁？是什么时候绘制的',
      instructions: parser.getFormatInstructions(),
    });

    // 修复输出类型，例如这里有个类型
    const wrongOutput = {
      answer:
        '蒙娜丽莎的作者是达芬奇，大约在16世纪初期（1003年至1506年之间）开始绘制。',
      sources: '90%',
    };
    const fixParser = OutputFixingParser.fromLLM(model, parser);
    const output = await fixParser.parse(JSON.stringify(wrongOutput));
    console.log(output);
    // 解析数组
    const parser2 = new CommaSeparatedListOutputParser();

    const prompt2 = PromptTemplate.fromTemplate(
      '列出3个 {country} 的著名的互联网公司.\n{instructions}',
    );

    const chain2 = prompt2.pipe(model).pipe(parser2);

    const res2 = await chain2.stream({
      country: '中国',
      instructions: parser2.getFormatInstructions(),
    });

    console.log(res2);
    return res;
  }

  @Get('dataSource')
  async dataSource() {
    // text文件
    // const textLoader = new TextLoader('statics/test.txt');
    // const docs = await textLoader.load();
    // console.log(docs);
    // pdf文件
    // const pdfLoader = new PDFLoader('statics/test.pdf');
    // const docs = await pdfLoader.load();
    // console.log(docs);
    // 加载目录下文件
    // const loader = new DirectoryLoader('test', {
    //   '.pdf': (path) => new PDFLoader(path, { splitPages: false }),
    //   '.txt': (path) => new TextLoader(path),
    //   '.ts': (path) => new TextLoader(path),
    // });
    // const docs = await loader.load();
    // console.log(docs);
    // 爬虫
    // const loader = new CheerioWebBaseLoader(
    //   'https://kaiyi.cool/blog/github-copilot',
    // );
    //
    // const docs = await loader.load();
    // console.log(docs);
    // 大文件
    // const loader = new TextLoader('statics/test.txt');
    // const docs = await loader.load();
    //
    // // chunkSize 其定义了切分结果中每个块的大小，这决定了 LLM 在每个块中能够获取的上下文。需要根据数据源的内容类型来制定，如果太大一个块中可能包含多个信息，容易导致 LLM 分神，并且这个结果会作为对话的上下文输入给 LLM，导致 token 增加从而增加成本。如果过小，则可能一个块中无法包含完整的信息，影响输出的质量。
    // // chunkOverlap 定义了，块和块之间重叠部分的大小，因为在自然语言中内容是连续性的，分块时一定的重叠可以让文本不会在奇怪的地方被切割，并让内容保留一定的上下文。较大的 chunkOverlap 可以确保文本不会被奇怪地分割，但可能会导致重复提取信息，而较小的 chunkOverlap 可以减少重复提取信息的可能性，但可能会导致文本在奇怪的地方切割。
    // const splitter = new RecursiveCharacterTextSplitter({
    //   chunkSize: 64,
    //   chunkOverlap: 0,
    // });
    //
    // const splitDocs = await splitter.splitDocuments(docs);
    // console.log(JSON.stringify(splitDocs));
    // 代码拆分
    const js = `
function myFunction(name:string,job:string){
	console.log("Welcome " + name + ", the " + job);
}

myFunction('Harry Potter','Wizard')

function forFunction(){
	for (let i=0; i<5; i++){
        console.log("这个数字是" + i)
	}
}

forFunction()
`;
    const splitter = RecursiveCharacterTextSplitter.fromLanguage('js', {
      chunkSize: 64,
      chunkOverlap: 0,
    });
    const jsOutput = await splitter.createDocuments([js]);
    console.log(jsOutput);
  }

  // 向量数据库
  @Get('vectorDb')
  async vectorDb() {
    const loader = new TextLoader('statics/test.txt');
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 20,
    });

    const splitDocs = await splitter.splitDocuments(docs);
    console.log(splitDocs[0].pageContent);

    const embeddings = new AlibabaTongyiEmbeddings({
      apiKey: 'sk-bb6c4ee82b824f7d83634f161d53ecf4',
    });
    const res = await embeddings.embedQuery(splitDocs[0].pageContent);
    console.log(res);
    return res;
  }
}
