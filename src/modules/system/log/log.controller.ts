import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
  Version,
} from '@nestjs/common';
import { LogService } from '@/modules/system/log/log.service';
import { QuerySystemLogDto } from '@/modules/system/log/dto/querySystemLog.dto';

@Controller('/system/log')
export class LogController {
  constructor(private logService: LogService) {}
  @Get()
  @Version('1')
  async find(
    @Query() dto: QuerySystemLogDto,
    // @Query('current', new DefaultValuePipe(1), ParseIntPipe)
    // current: number,
    // @Query('pageSize', new DefaultValuePipe(1), ParseIntPipe)
    // pageSize: number,
  ) {
    const [data, total] = await this.logService.findMany(dto);
    return { data, total };
  }
}
