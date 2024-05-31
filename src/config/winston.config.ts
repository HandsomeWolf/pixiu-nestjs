// winston.config.ts
import { ConfigService } from '@nestjs/config';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

// 创建日志文件轮转传输的函数
const createDailyRotateTransport = (level: string, filename: string) => {
  return new DailyRotateFile({
    dirname: './logs',
    filename: `${filename}-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    level: level,
    format: winston.format.combine(
      winston.format.timestamp(),
      nestWinstonModuleUtilities.format.nestLike('PiXiuAdmin', {
        prettyPrint: true,
      }),
    ),
  });
};

// 工厂函数，用于创建Winston模块的配置
export const createWinstonModuleOptions = (configService: ConfigService) => {
  const isDev = configService.get<string>('NODE_ENV') === 'development';
  return {
    level: 'silly',
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('PiXiuAdmin', {
            colors: true,
            prettyPrint: true,
          }),
        ),
      }),
      ...(isDev
        ? []
        : [
            createDailyRotateTransport('warn', 'error'),
            createDailyRotateTransport('info', 'app'),
          ]),
    ],
  };
};
