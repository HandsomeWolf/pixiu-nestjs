import { BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '@/modules/system/user/user.service';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { JwtPayloadService } from '@/modules/system/auth/strategies/jwt-payload.service';
import { RoleService } from '@/modules/system/role/role.service';
import { MenuService } from '@/modules/system/menu/menu.service';
import { PermissionService } from '@/modules/system/permission/permission.service';
import { PermissionsResponseDto } from '@/modules/system/auth/dto/response/permissions-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private permissionService: PermissionService,
    private jwtPayloadService: JwtPayloadService,
    private roleService: RoleService,
    private menuService: MenuService,
  ) {}
  // 登录
  async signIn(dto: SignInUserDto) {
    return await this.jwtPayloadService.createPayload(dto);
  }
  // 注册
  async signUp(dto: CreateUserDto) {
    const { username } = dto;
    const user = await this.userService.findUserWithRoleIdsByUsername(username);
    if (user) {
      throw new BadRequestException('用户已存在');
    }
    return await this.userService.create(dto);
  }

  async findUserInfo(id: number) {
    return await this.userService.findUserInfo(id);
  }

  async findPermissionsWithMenusByRoleIds(roleIds: number[]) {
    const result = {
      authorizedMenuItems: [],
      authorizedButtons: [],
    };
    // 是否是超级管理员
    const isAdmin = this.roleService.isAdmin(roleIds);

    // 超级管理员
    if (isAdmin) {
      result.authorizedMenuItems = await this.menuService.findAll({
        status: 1,
      });
      result.authorizedButtons = ['*:*:*'];
      return result;
    }

    // 非超级管理员
    const { permissionIds, menuIds } =
      await this.roleService.findPermissionIdsWithMenuIdsByIds(roleIds);

    if (menuIds.length > 0) {
      result.authorizedMenuItems = await this.menuService.findAllByIds(
        menuIds,
        { status: 1 },
      );
    }
    if (permissionIds.length > 0) {
      const permissions =
        await this.permissionService.findNamesByIds(permissionIds);

      result.authorizedButtons = permissions.map(
        (permission) => permission.name,
      );
    }
    return result;
  }
}
