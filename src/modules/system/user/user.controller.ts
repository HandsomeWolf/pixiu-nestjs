import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';

import { UserService } from '@/modules/system/user/user.service';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { Permission, Read } from '@/core/decorators/role-permission.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolePermissionGuard } from '@/core/guards/role-permission.guard';
import { PolicyGuard } from '@/core/guards/policy.guard';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { PublicUpdateUserDto } from '@/modules/system/user/dto/response/public-update-user.dto';
import { UpdateUserDto } from '@/modules/system/user/dto/request/update-user.dto';
import { PublicUserDto } from '@/modules/system/user/dto/response/public-user.dto';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryUserDto } from '@/modules/system/user/dto/request/query-user.dto';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';

@Controller('system/user')
@UseGuards(AuthGuard('jwt'), RolePermissionGuard, PolicyGuard)
@Permission('systemUser')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @Serialize(PublicUserDto)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Read()
  @Serialize(PublicUserDto)
  findAll(@Pagination() pagination: IPagination, @Query() dto: QueryUserDto) {
    return this.userService.findAll(pagination, dto);
  }

  @Get(':username')
  findOne(@Param('username') username: string) {
    return this.userService.findOne(username);
  }

  @Patch()
  @Serialize(PublicUpdateUserDto)
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @Patch(':id')
  updateUserProfile(
    @Param('id') id: number,
    @Body() updateUserProfileDto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(id, updateUserProfileDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
