import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  BadRequestException,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from '@/modules/system/menu/dto/request/create-menu.dto';
import { UpdateMenuDto } from '@/modules/system/menu/dto/request/update-menu.dto';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @Get()
  findAll(
    @Pagination() pagination: IPagination,
    @Query('args')
    args: any,
  ) {
    let parsedArgs;
    if (args) {
      try {
        parsedArgs = JSON.parse(args);
      } catch (error) {
        throw new BadRequestException('args: 无效的JSON数据格式');
      }
    }
    return this.menuService.findAll(pagination, parsedArgs);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.menuService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.menuService.remove(+id);
  }
}
