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
import { PermissionService } from '@/modules/system/permission/permission.service';
import { CreatePermissionDto } from '@/modules/system/permission/dto/create-permission.dto';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { PublicUpdatePermissionDto } from '@/modules/system/permission/dto/public-update-permission.dto';
import { UpdatePermissionDto } from '@/modules/system/permission/dto/update-permission.dto';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page,
    @Query('limit', new ParseIntPipe({ optional: true })) limit,
  ) {
    return this.permissionService.findAll(page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.permissionService.findOne(+id);
  }

  @Patch(':id')
  @Serialize(PublicUpdatePermissionDto)
  update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionService.update(+id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.permissionService.remove(+id);
  }
}
