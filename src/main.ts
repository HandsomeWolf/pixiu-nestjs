import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';
import * as process from 'process';

async function bootstrap() {
  // 创建应用程序实例
  const app = await NestFactory.create(
    // 关联模块
    AppModule,
    // 启用跨域资源共享
    { cors: true },
  );

  const port = process.env.PORT || 3000;

  // 使用helmet中间件来增强应用的安全性。
  app.use(helmet());

  // 本函数通过调用`app.get(WINSTON_MODULE_NEST_PROVIDER)`来获取Winston日志服务的实例，
  // 然后将其应用到全局，使得应用可以在任何地方使用这个日志服务进行日志记录。
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // 设置全局前缀
  app.setGlobalPrefix(process.env.APP_API_PREFIX);

  // 启用版本控制。
  // 这个函数配置应用程序以使用URI类型版本控制，并设置默认版本为'1'。
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });

  // 在应用级别使用全局管道（Pipes）进行数据验证和转换。
  app.useGlobalPipes(
    new ValidationPipe({
      // 启用自动数据转换功能
      transform: true,
    }),
  );

  // 启动应用程序监听指定端口，并打印运行信息。
  await app.listen(port, () => {
    new Logger('bootstrap').log(
      `Application is running on: http://localhost:${port}`,
    );
  });
}
bootstrap();
