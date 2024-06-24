import { Module } from '@nestjs/common';
import { LoggerModule } from '@/core/logger/logger.module';
import { RedisModule } from '@/core/redis/redis.module';
import { ConfigurationModule } from '@/core/configuration/configuration.module';
import { PrismaModule } from '@/core/database/prisma/prisma.module';
import { SystemModule } from '@/modules/system/system.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigurationModule,
    LoggerModule,
    // MailModule,
    // ThrottlerModule.forRoot([
    //   {
    //     name: 'short',
    //     ttl: 1000, // 1 second
    //     limit: 1,
    //   },
    //   {
    //     name: 'medium',
    //     ttl: 60 * 1000, // 1 minute
    //     limit: 100,
    //   },
    // ]),
    PrismaModule,
    RedisModule,
    SystemModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
  ],
  controllers: [],
  providers: [
    //   {
    //     provide: APP_GUARD,
    //     useClass: ThrottlerGuard, // 将ThrottlerGuard配置为全局守卫
    //   },
  ],
})
export class AppModule {}
