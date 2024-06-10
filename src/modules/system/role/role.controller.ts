import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RoleService } from '@/modules/system/role/role.service';
import { CreateRoleDto } from '@/modules/system/role/dto/create-role.dto';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { PublicRoleDto } from '@/modules/system/role/dto/public-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/update-role.dto';
import { QueryRoleDto } from '@/modules/system/role/dto/request/query-role.dto';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';

@Controller('/system/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Get()
  // 局部管道可以细粒度的控制
  // findAll(
  //   @Query('current', new ParseIntPipe({ optional: true })) page: number,
  //   @Query('pageSize', new ParseIntPipe({ optional: true })) limit: number,
  // )
  // 如果不传参可以不用new
  // findAll(
  //   @Query('current', ParseIntPipe) page: number,
  //   @Query('pageSize', ParseIntPipe) limit: number,
  // )
  findAll(@Pagination() pagination: IPagination, @Query() dto: QueryRoleDto) {
    return this.roleService.findAll(pagination, dto);
  }
  //
  // @Get(':id')
  // @Serialize(PublicRoleDto)
  // findOne(@Param('id') id: string) {
  //   return this.roleService.findOne(+id);
  // }
  //
  @Patch(':id')
  @Serialize(PublicRoleDto)
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.roleService.remove(id);
  }
}
