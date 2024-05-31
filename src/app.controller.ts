import { Controller, Get, Inject, LoggerService } from '@nestjs/common';
import { AppService } from './app.service';
import { SystemMenus } from '@prisma/client';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(WINSTON_MODULE_NEST_PROVIDER)
    private readonly logger: LoggerService,
  ) {
    this.logger.error('测试错误日志');
  }

  @Get()
  getHello(): Promise<SystemMenus[]> {
    return this.appService.getHello();
  }
}
