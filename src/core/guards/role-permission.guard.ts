import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSION_KEY } from '../decorators/role-permission.decorator';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '@/modules/system/user/user.repository';
import { RoleService } from '@/modules/system/role/role.service';

@Injectable()
export class RolePermissionGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private userRepository: UserRepository,
    private roleService: RoleService,
    private configService: ConfigService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const classPermission = this.reflector.get(
      PERMISSION_KEY,
      context.getClass(),
    );
    const handlerPermission = this.reflector.get(
      PERMISSION_KEY,
      context.getHandler(),
    );
    const cls =
      classPermission instanceof Array
        ? classPermission.join('')
        : classPermission;
    const handler =
      handlerPermission instanceof Array
        ? handlerPermission.join('')
        : handlerPermission;
    const right = `${cls}:${handler}`;
    const req = context.switchToHttp().getRequest();
    const { username } = req.user;
    const user =
      await this.userRepository.findOneByUsernameWithRolesAndPermissions(
        username,
      );
    if (!user) {
      return false;
    }
    const roleIds = user.usersRoles.map((o) => o.roleId);
    // 如果是whitelist中的用户对应的roleId，直接返回true
    const whitelist = this.configService.get('ROLE_WHITELIST_ID');
    if (whitelist) {
      const whitelistArr = whitelist.split(',');
      // 判断whitelistArr中包含roleIds中的数据，则返回true
      if (whitelistArr.some((o) => roleIds.includes(+o))) {
        return true;
      }
    }

    const permissions = await this.roleService.findAllByIds(roleIds);

    const permissionsArr = permissions
      .map((o) => o.rolesPermissions.map((o) => o.permission.name))
      .reduce((acc, cur) => {
        // 需要对结果进行去重
        return [...new Set([...acc, ...cur])];
      }, []);
    return permissionsArr.some((o) => o === right);
  }
}