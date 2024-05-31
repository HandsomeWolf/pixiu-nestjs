import { Controller, Get } from '@nestjs/common';
import { ChatAlibabaTongyi } from '@langchain/community/chat_models/alibaba_tongyi';
import { HumanMessage } from '@langchain/core/messages';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { PromptTemplate } from '@langchain/core/prompts';

@Controller('ai')
export class AiController {
  @Get()
  async findAll() {
    const greetingPrompt = new PromptTemplate({
      inputVariables: ['timeOfDay', 'name'],
      template: '{timeOfDay}好, {name} {{test}}',
    });
    const formattedGreetingPrompt = await greetingPrompt.format({
      timeOfDay: '下午',
      name: '凯',
    });

    console.log(formattedGreetingPrompt);

    // 固定部分参数
    const partialedPrompt = await greetingPrompt.partial({
      name: '李聪',
    });

    const formattedPrompt = await partialedPrompt.format({
      timeOfDay: '下午',
    });

    console.log(formattedPrompt);

    const formattedPrompt2 = await partialedPrompt.format({
      timeOfDay: '晚上',
    });

    console.log(formattedPrompt2);

    // 动态填充参数
    const getCurrentDateStr = () => {
      return new Date().toLocaleDateString();
    };

    const promptWithDate = new PromptTemplate({
      template: '今天是{date}，{activity}。',
      inputVariables: ['date', 'activity'],
    });

    const partialedPromptWithDate = await promptWithDate.partial({
      date: getCurrentDateStr,
    });

    const formattedPromptWithDate = await partialedPromptWithDate.format({
      activity: '我们去爬山',
    });

    console.log(formattedPromptWithDate);

    // const alibabaTongYiModel = new ChatAlibabaTongyi({
    //   model: 'qwen-turbo', // Available models: qwen-turbo, qwen-plus, qwen-max
    //   alibabaApiKey: 'sk-bb6c4ee82b824f7d83634f161d53ecf4',
    //   temperature: 1,
    // });
    // const outputPrase = new StringOutputParser();
    //
    // const simpleChain = alibabaTongYiModel.pipe(outputPrase);
    //
    // const messages = [new HumanMessage('我要学习js帮我推荐一些书籍')];
    //
    // const multiMessages = [
    //   [new HumanMessage('我要学习javascript帮我推荐一些书籍')],
    //   [
    //     new HumanMessage(
    //       '作为一名web前端开发者，从长远角度考虑，是否有必要学习python',
    //     ),
    //   ],
    // ];
    //
    // // invoke：基础的调用
    // const res1 = await simpleChain.invoke(messages);
    // console.log(res1);
    //
    // // batch：进行批量调用
    // const res2 = await simpleChain.batch(multiMessages);
    // console.log(res2);
    //
    // // stream：流式调用
    // const res3 = await simpleChain.stream(messages);
    // console.log(res3);
  }
}
