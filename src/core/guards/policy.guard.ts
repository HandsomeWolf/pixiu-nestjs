import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { PERMISSION_KEY } from '../decorators/role-permission.decorator';
import { Reflector } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { plainToInstance } from 'class-transformer';
import {
  CaslAbilityService,
  IPolicy,
} from '@/modules/system/policy/casl-ability.service';
import { PermissionService } from '@/modules/system/permission/permission.service';
import { RoleService } from '@/modules/system/role/role.service';
import { SharedService } from '@/modules/system/shared/shared.service';
import { PrismaClient } from '@prisma/client';
import { UserService } from '@/modules/system/user/user.service';

const prisma = new PrismaClient();

const mapSubjectToClass = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'user':
      return prisma.user;
    default:
      return subject;
  }
};

@Injectable()
export class PolicyGuard implements CanActivate {
  constructor(
    private caslAbilityService: CaslAbilityService,
    private reflector: Reflector,
    private configService: ConfigService,
    private permissionService: PermissionService,
    private userService: UserService,
    private roleService: RoleService,
    private sharedService: SharedService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 通过caslAbilityService获取用户已有权限的实例
    // 通过ability实例上的can cannot来判断用户是 否有对应的权限
    // 接口权限 -> Polity进行关联 读取数据库中的接口关联的Policy与上面的ability之间进行逻辑判断，从而对数据库实现数据权限控制
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
    // 1. Guard -> 装饰器handler&class permission name
    const right = `${cls}:${handler}`;
    const req = context.switchToHttp().getRequest();
    const { username } = req.user;
    if (!username) {
      return false;
    }

    console.log('🚀 ~ PolicyGuard ~ canActivate ~ right:', right);
    // 2. permission -> Policy 需要访问接口的数据权限
    const permissionPolicy = await this.permissionService.findByName(right);

    // 3. Policy -> subjects -> 缩小RolePolicy的查询范围
    const subjects = permissionPolicy.policies.map((policy) => {
      return policy.policy.subject;
    });
    // 4. username -> User -> Role -> Policy & subjects 用户已分配接口权限
    const user =
      await this.userService.findUserWithRolesWithPermissionsByUsername(
        username,
      );
    const roleIds = user.roles.map((role) => role.roleId);
    // 判断是否是白名单
    // 如果是whitelist中的用户对应的roleId，直接返回true
    const whitelist = this.configService.get('ROLE_WHITELIST_ID');
    if (whitelist) {
      const whitelistArr = whitelist.split(',');
      // 判断whitelistArr中包含roleIds中的数据，则返回true
      if (whitelistArr.some((o) => roleIds.includes(+o))) {
        return true;
      }
    }

    const rolePolicy = await this.roleService.findAllByIds(roleIds);

    const rolePolicyFilterBySubjects = rolePolicy.reduce((acc, cur) => {
      const rolePolicy = cur.policies.filter((policy) => {
        return subjects.includes(policy.policy.subject);
      });
      acc.push(...rolePolicy);
      return acc;
    }, []);

    const policies: IPolicy[] = rolePolicyFilterBySubjects.map((o) => o.policy);
    user.RolePolicy = rolePolicy;
    delete user.password;
    user.policies = policies;
    user.roleIds = roleIds;
    user.permissions = user.roles.reduce((acc, cur) => {
      return [...acc, ...cur.role.permissions];
    }, []);
    console.log('🚀 ~ PolicyGuard ~ canActivate ~ user:', user);
    const abilities = await this.caslAbilityService.buildAbility(policies, [
      user,
      req,
      this.reflector,
    ]);

    if (policies.length === 0) {
      // 接口不需要任何数据权限控制
      return true;
    }

    let allPermissionsGranted = true;
    const tempPermissionsPolicy = [...permissionPolicy.policies];

    for (const policy of tempPermissionsPolicy) {
      const { action, subject, fields } = policy.policy;

      let permissionGranted = false;

      for (const ability of abilities) {
        // map -> {string->subject: function(user)}
        const data = await this.sharedService.getSubject(subject, user);
        const subjectTemp = mapSubjectToClass(subject);
        const subjectObj =
          typeof subjectTemp === 'string'
            ? subjectTemp
            : plainToInstance(subjectTemp, data);

        if (fields) {
          if (fields instanceof Array && fields.length > 0) {
            permissionGranted = fields.every((field) =>
              ability.can(action, subjectObj, field + ''),
            );
          } else if (fields['data']) {
            permissionGranted = fields['data'].every((field) =>
              ability.can(action, subjectObj, field + ''),
            );
          }
        } else {
          permissionGranted = ability.can(action, subjectObj);
        }

        if (permissionGranted) {
          break;
        }
      }

      if (permissionGranted) {
        const index = tempPermissionsPolicy.indexOf(policy);
        if (index > -1) {
          tempPermissionsPolicy.splice(index, 1);
        }
      }
    }

    if (tempPermissionsPolicy.length !== 0) {
      allPermissionsGranted = false;
    }

    // console.log('🚀 ~ PolicyGuard ~ canActivate ~ flag:', flag);
    return allPermissionsGranted;
  }
}
