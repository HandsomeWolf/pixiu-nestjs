import { Controller, Get } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import { RedisService } from '@/redis/redis.service';

@Controller('system/user')
export class UserController {
  constructor(private redis: RedisService) {}
  // Login and registration, limited to 10 times per hour
  @Throttle({ default: { limit: 10, ttl: 1000 * 60 * 60 } })
  @Get()
  async findAll() {
    return await this.redis.get('token');
  }
}
