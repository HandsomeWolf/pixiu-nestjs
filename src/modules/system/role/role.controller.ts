import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { RoleService } from '@/modules/system/role/role.service';
import { CreateRoleDto } from '@/modules/system/role/dto/create-role.dto';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { PublicRoleDto } from '@/modules/system/role/dto/public-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleDto) {
    console.log('🚀 ~ RoleController ~ create ~ createRoleDto:', createRoleDto);
    return this.roleService.create(createRoleDto);
  }

  @Get()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page: number,
    @Query('limit', new ParseIntPipe({ optional: true })) limit: number,
  ) {
    return this.roleService.findAll(page, limit);
  }

  @Get(':id')
  @Serialize(PublicRoleDto)
  findOne(@Param('id') id: string) {
    return this.roleService.findOne(+id);
  }

  @Patch(':id')
  @Serialize(PublicRoleDto)
  update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    return this.roleService.update(+id, updateRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roleService.remove(+id);
  }
}
