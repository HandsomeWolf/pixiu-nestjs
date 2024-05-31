import { Controller, Get } from '@nestjs/common';

@Controller('system/user')
export class UserController {
  @Get()
  findAll() {
    return '';
  }
}
