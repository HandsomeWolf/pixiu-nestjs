import { Global, Module } from '@nestjs/common';
import { RedisService } from './redis.service';

@Global() // 使该模块成为全局模块
@Module({
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
