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
import { Serialize } from '@/core/decorators/serialize.decorator';
import { QueryRoleDto } from '@/modules/system/role/dto/request/query-role.dto';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';
import { CreateRoleDto } from '@/modules/system/role/dto/request/create-role.dto';
import { PublicRoleDto } from '@/modules/system/role/dto/response/public-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/request/update-role.dto';

@Controller('/system/role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.create(dto);
  }

  @Get()
  findAll(@Pagination() pagination: IPagination, @Query() dto: QueryRoleDto) {
    return this.roleService.findAll(pagination, dto);
  }

  @Get(':id')
  @Serialize(PublicRoleDto)
  findOne(@Param('id') id: number) {
    return this.roleService.findOne(id);
  }

  @Patch(':id')
  @Serialize(PublicRoleDto)
  update(@Param('id') id: number, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(id, updateRoleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.roleService.delete(id);
  }
}
