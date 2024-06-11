import {
  Injectable,
  OnModuleInit,
  OnModuleDestroy,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Redis, { RedisOptions } from 'ioredis';

@Injectable()
export class RedisService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private client: Redis;

  constructor(private configService: ConfigService) {
    const redisOptions: RedisOptions = {
      host: this.configService.get<string>('REDIS_HOST', 'localhost'),
      port: this.configService.get<number>('REDIS_PORT', 6379),
      password: this.configService.get<string>('REDIS_PASSWORD', undefined),
      db: this.configService.get<number>('REDIS_DB', 0),
    };
    this.client = new Redis(redisOptions);
  }

  onModuleInit() {
    this.client.on('connect', () => {
      this.logger.log('Connected to Redis');
    });
    this.client.on('error', (error) => {
      this.logger.error(`Redis error: ${error.message}`);
    });
  }

  onModuleDestroy() {
    this.client.quit();
  }

  async get(key: string): Promise<string | null> {
    try {
      return await this.client.get(key);
    } catch (error) {
      this.logger.error(`Redis get error: ${error.message}`);
      throw error;
    }
  }

  async set(key: string, value: string, ttl?: number): Promise<void> {
    try {
      await this.client.set(key, value, 'EX', ttl || 60);
    } catch (error) {
      this.logger.error(`Redis set error: ${error.message}`);
      throw error;
    }
  }

  // del(key: string): 删除一个键。
  async del(key: string): Promise<void> {
    try {
      await this.client.del(key);
    } catch (error) {
      this.logger.error(`Redis del error: ${error.message}`);
      throw error;
    }
  }
  // exists(key: string): 检查键是否存在。
  async exists(key: string): Promise<boolean> {
    try {
      const result = await this.client.exists(key);
      return result === 1;
    } catch (error) {
      this.logger.error(`Redis exists error: ${error.message}`);
      throw error;
    }
  }
  // expire(key: string, seconds: number): 设置键的过期时间。
  async expire(key: string, seconds: number): Promise<void> {
    try {
      await this.client.expire(key, seconds);
    } catch (error) {
      this.logger.error(`Redis expire error: ${error.message}`);
      throw error;
    }
  }
  // ttl(key: string): 获取键的剩余生存时间（TTL）。
  async ttl(key: string): Promise<number> {
    try {
      return await this.client.ttl(key);
    } catch (error) {
      this.logger.error(`Redis ttl error: ${error.message}`);
      throw error;
    }
  }
}
