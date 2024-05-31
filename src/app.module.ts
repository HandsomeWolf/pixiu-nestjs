import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import {
  WinstonModule,
  utilities as nestWinstonModuleUtilities,
} from 'nest-winston';
import { SystemModule } from './modules/system/system.module';
import { AiModule } from './modules/ai/ai.module';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const isDev = process.env.NODE_ENV === 'development';

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
      nestWinstonModuleUtilities.format.nestLike('MyApp', {
        prettyPrint: true,
      }),
    ),
  });
};

@Module({
  imports: [
    PrismaModule,
    WinstonModule.forRoot({
      level: 'silly',
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike('MyApp', {
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
        // new winston.transports.File({
        //   filename: 'error.log',
        //   level: 'error',
        //   format: winston.format.combine(
        //     winston.format.timestamp(),
        //     nestWinstonModuleUtilities.format.nestLike('MyApp', {
        //       prettyPrint: true,
        //     }),
        //   ),
        // }),
      ],
    }),
    SystemModule,
    AiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
