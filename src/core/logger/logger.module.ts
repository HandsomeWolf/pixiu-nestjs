import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import {
  consoleTransports,
  createRotateTransport,
} from './createRotateTransport';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          transports: [
            consoleTransports,
            ...(configService.get('APP_LOG_ENABLED') === 'true'
              ? [
                  createRotateTransport('info', 'application'),
                  createRotateTransport('warn', 'error'),
                ]
              : []),
          ],
        };
      },
    }),
  ],
})
export class LoggerModule {}
