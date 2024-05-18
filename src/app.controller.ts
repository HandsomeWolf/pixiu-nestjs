import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { SystemMenus } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<SystemMenus[]> {
    return this.appService.getHello();
  }
}
