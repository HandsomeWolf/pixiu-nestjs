import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PermissionService } from '@/modules/system/permission/permission.service';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { CreatePermissionDto } from '@/modules/system/permission/dto/required/create-permission.dto';
import { PublicUpdatePermissionDto } from '@/modules/system/permission/dto/response/public-update-permission.dto';
import { UpdatePermissionDto } from '@/modules/system/permission/dto/required/update-permission.dto';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from '@/modules/system/auth/strategies/jwt-payload.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  create(@Body() createPermissionDto: CreatePermissionDto) {
    return this.permissionService.create(createPermissionDto);
  }

  @Get()
  findAll(@Pagination() pagination: IPagination) {
    return this.permissionService.findAllWithPagination(pagination);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.permissionService.findOne(id);
  }

  @Patch(':id')
  @Serialize(PublicUpdatePermissionDto)
  update(
    @Param('id') id: number,
    @Body() updatePermissionDto: UpdatePermissionDto,
  ) {
    return this.permissionService.update(id, updatePermissionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.permissionService.delete(id);
  }
}
