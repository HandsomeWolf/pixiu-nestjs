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
  UseGuards,
} from '@nestjs/common';

import { CreateUserDto } from '@/modules/system/user/dto/create-user.dto';
import { UserService } from '@/modules/system/user/user.service';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { PublicUserDto } from '@/modules/system/auth/dto/public-user.dto';
import { Permission, Read } from '@/core/decorators/role-permission.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolePermissionGuard } from '@/core/guards/role-permission.guard';
import { PolicyGuard } from '@/core/guards/policy.guard';
import { PublicUpdateUserDto } from '@/modules/system/user/dto/public-update-user.dto';
import { UpdateUserDto } from '@/modules/system/user/dto/update-user.dto';

@Controller('user')
@UseGuards(AuthGuard('jwt'), RolePermissionGuard, PolicyGuard)
@Permission('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @Serialize(PublicUserDto)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Read()
  findAll(
    @Query('page', new ParseIntPipe({ optional: true })) page,
    @Query('limit', new ParseIntPipe({ optional: true })) limit,
  ) {
    return this.userService.findAll(page, limit);
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

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }
}
