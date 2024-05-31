import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Version,
} from '@nestjs/common';
import { CreateSystemMenuDto } from '@/modules/system/menu/dto/createSystemMenu.dto';
import { MenuService } from '@/modules/system/menu/menu.service';
import { UpdateSystemMenuDto } from '@/modules/system/menu/dto/updateSystemMenu.dto';

@Controller('system/menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Get()
  @Version('1')
  async find() {
    return await this.menuService.find();
  }
  // @Get()
  // @Version('2')
  // findVersion2() {
  //   return 'find version 2';
  // }

  @Post()
  async create(@Body() dto: CreateSystemMenuDto) {
    await this.menuService.create(dto);
    return 'find';
  }

  @Put()
  async update(@Body() dto: UpdateSystemMenuDto) {
    await this.menuService.update(dto);
    return 'find';
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    this.menuService.delete(id);
    return 'find';
  }
}
