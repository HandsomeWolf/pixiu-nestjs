import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { WinstonModule } from 'nest-winston';
import { SystemModule } from './modules/system/system.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createWinstonModuleOptions } from '@/config/winston.config';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: createWinstonModuleOptions,
    }),
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 1000, // 1 second
        limit: 2,
      },
      {
        name: 'medium',
        ttl: 60 * 1000, // 1 minute
        limit: 100,
      },
    ]),
    PrismaModule,
    RedisModule,
    SystemModule,
    RedisModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard, // 将ThrottlerGuard配置为全局守卫
    },
  ],
})
export class AppModule {}
