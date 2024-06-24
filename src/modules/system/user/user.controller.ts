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
import {
  CreatePermission,
  Permission,
  ReadPermission,
  UpdatePermission,
  DeletePermission,
} from '@/core/decorators/role-permission.decorator';
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
import { UserListResponseDto } from '@/modules/system/user/dto/response/user-list-response.dto';
import { PaginationService } from '@/common/services/pagination.service';
import { successResponse } from '@/utils/response.utils';
import { QueryProfileDto } from '@/modules/system/user/dto/request/query-profile.dto';

@Controller('system/user')
// @UseGuards(AuthGuard('jwt'), RolePermissionGuard, PolicyGuard)
// @Permission('systemUser')
export class UserController {
  constructor(
    private userService: UserService,
    private paginationService: PaginationService,
  ) {}

  @Post()
  // @CreatePermission()
  @Serialize(PublicUserDto)
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  // @ReadPermission()
  @Serialize(UserListResponseDto)
  async findAll(
    @Pagination() pagination: IPagination,
    @Query() userDto: QueryUserDto,
    @Query() profileDto: QueryProfileDto,
  ) {
    // return this.userService.findUsersWithProfileWithRoles(pagination, dto);
    // const { data, total } = await this.paginationService.paginate({
    //   model: 'user',
    //   paginationOptions: pagination,
    //   where: dto,
    //   includeOrSelect: {
    //     include: {
    //       roles: {
    //         include: {
    //           role: true,
    //         },
    //       },
    //       profile: true,
    //     },
    //   },
    // });
    const { data, total } =
      await this.userService.findUsersWithProfileWithRoles(
        pagination,
        userDto,
        profileDto,
      );
    return successResponse(data, total);
  }

  @Get(':username')
  // @ReadPermission()
  findOne(@Param('username') username: string) {
    return this.userService.findUserWithRoleIdsByUsername(username);
  }

  @Patch()
  // @UpdatePermission()
  @Serialize(PublicUpdateUserDto)
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @Patch(':id')
  // @UpdatePermission()
  updateUserProfile(
    @Param('id') id: number,
    @Body() updateUserProfileDto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(id, updateUserProfileDto);
  }

  @Delete(':id')
  // @DeletePermission()
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
