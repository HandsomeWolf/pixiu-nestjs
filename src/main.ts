import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import helmet from 'helmet';
import { ConfigService } from '@nestjs/config';
import { AllExceptionFilter } from '@/core/filters/all-exception.filter';
import { HttpExceptionFilter } from '@/core/filters/http-exception.filter';
import { PrismaExceptionFilter } from '@/core/filters/prisma-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const port = configService.get<number>('APP_PORT', 3000);
  const cors = configService.get('APP_CORS_ENABLED', false);
  const prefix = configService.get('APP_API_PREFIX', '/api');
  const version = configService.get<string>('APP_API_VERSION');

  const errorFilterEnabled = configService.get<boolean>(
    'APP_ERROR_FILTER_ENABLED',
  );

  app.use(helmet());
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
  app.setGlobalPrefix(prefix);

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: version,
  });
  if (cors === true) {
    app.enableCors();
  }
  if (errorFilterEnabled === true) {
    const httpAdapter = app.get(HttpAdapterHost);
    app.useGlobalFilters(
      new AllExceptionFilter(httpAdapter),
      new HttpExceptionFilter(httpAdapter),
      new PrismaExceptionFilter(httpAdapter),
    );
  }

  app.enableShutdownHooks();

  // 在应用级别使用全局管道（Pipes）进行数据验证和转换。
  app.useGlobalPipes(
    new ValidationPipe({
      // 去掉dto中不存在的字段
      whitelist: true,
      // 对请求参数进行转换数据类型
      transform: true,
      transformOptions: {
        // 尝试进行隐式类型转换，以确保数据的正确性。
        enableImplicitConversion: true,
      },
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
