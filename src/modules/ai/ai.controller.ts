import { Controller, Sse, MessageEvent, Query, Get } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import * as TencentCloud from 'tencentcloud-sdk-nodejs';
import * as process from 'process';
import { SSEResponseModel } from 'tencentcloud-sdk-nodejs/tencentcloud/common/sse_response_model';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '@/prisma/prisma.service';

// 知识类

@Controller('ai')
export class AiController {
  constructor(
    private httpService: HttpService,
    private prisma: PrismaService,
  ) {}

  @Sse('stream')
  stream(@Query('userMessage') userMessage: string): Observable<MessageEvent> {
    return new Observable((observer) => {
      const HunYuanClient = TencentCloud.hunyuan.v20230901.Client;

      const clientConfig = {
        credential: {
          secretId: process.env.TENCENT_CLOUD_SECRET_ID,
          secretKey: process.env.TENCENT_CLOUD_SECRET_KEY,
        },
        region: 'ap-beijing',
        profile: {
          httpProfile: {
            endpoint: 'hunyuan.tencentcloudapi.com',
          },
        },
      };

      const client = new HunYuanClient(clientConfig);
      const params = {
        Model: 'hunyuan-standard',
        Messages: [
          {
            Role: 'user',
            Content: userMessage,
          },
        ],
        Stream: true,
      };

      // API 调用
      client
        .ChatCompletions(params)
        .then((res) => {
          const sseRes = res as SSEResponseModel;
          if (typeof sseRes.on === 'function') {
            // 流式响应处理
            sseRes.on('message', (message) => {
              // 向前端发送事件
              observer.next({ data: message.data });
            });
            sseRes.on('close', () => {
              observer.complete();
            });
          } else {
            // 若非流式响应，发送一次性事件
            observer.next({ data: JSON.stringify(sseRes) });
            observer.complete();
          }
        })
        .catch((error) => {
          // 发送错误
          observer.error(error);
        });
    });
  }

  @Sse('qBotStream')
  qBotStream(
    @Query('userMessage') userMessage: string,
  ): Observable<MessageEvent> {
    let accumulatedData = '';
    return new Observable((observer) => {
      const sseUrl = 'https://wss.lke.cloud.tencent.com/v1/qbot/chat/sse';
      this.httpService
        .axiosRef({
          method: 'post',
          url: sseUrl,
          data: {
            content: userMessage,
            session_id: uuidv4(),
            bot_app_key: process.env.TENCENT_CLOUD_BOT_APP_KEY,
            visitor_labels: [],
            visitor_biz_id: uuidv4(),
          },
          headers: { 'Content-Type': 'application/json' },
          responseType: 'stream',
        })
        .then((response) => {
          // 处理流式数据
          response.data.on('data', (chunk) => {
            accumulatedData += chunk.toString(); // 累积数据块
            let newlineIndex;
            while ((newlineIndex = accumulatedData.indexOf('\n\n')) >= 0) {
              // 检查是否有完整的事件结束符
              const completeMessage = accumulatedData.substring(
                0,
                newlineIndex,
              ); // 获取完整的事件数据
              accumulatedData = accumulatedData.substring(newlineIndex + 2); // 移除已处理的数据
              const dataArray = completeMessage.split('\ndata:');
              if (dataArray.length > 1) {
                observer.next(dataArray[1] as any);
              }
            }
          });

          response.data.on('error', (error) => {
            // 发生错误时通知 observer
            observer.error(error);
          });

          response.data.on('end', () => {
            // 数据流完成时关闭 observer
            observer.complete();
          });
        })
        .catch((error) => {
          // 请求过程中发生错误时通知 observer
          observer.error(error);
        });
    });
  }

  @Get()
  async findBooks(@Query('name') name: string) {
    console.log(name);
    const data = await this.prisma.books.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
    return { data };
  }
}
