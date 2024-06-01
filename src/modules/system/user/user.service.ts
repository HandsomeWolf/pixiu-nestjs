import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '@/modules/system/user/user.repository';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
    private prismaService: PrismaService,
  ) {}
  // async create(userObj: CreateUserDto) {
  //   // 读取默认角色信息
  //   const DEFAULT_ROLE_ID = +this.configService.get('ROLE_DEFAULT_ID');
  //   const roleIds = userObj.roleIds || [DEFAULT_ROLE_ID];
  //   const validRoleIds = [];
  //
  //   for (const roleId of roleIds) {
  //     const role = await this.roleRepository.findRoleById(roleId);
  //     if (role) {
  //       validRoleIds.push(roleId);
  //     }
  //   }
  //   if (validRoleIds.length === 0) {
  //     validRoleIds.push(DEFAULT_ROLE_ID);
  //   }
  //
  //   delete userObj['roleIds'];
  //
  //   return this.userRepository.create(userObj, validRoleIds);
  // }
  //
  // async update(userObj: UpdateUserDto): Promise<any> {
  //   return await this.prismaService.$transaction(
  //     async (prisma: PrismaService) => {
  //       // 角色 权限的更新，放置在前
  //       const roleIds = await this.roleRepository.updateRoles(userObj.roles);
  //       return await this.userRepository.updateUserAndRoles(userObj, roleIds);
  //     },
  //   );
  // }
  //
  // findAll(current: number = 1, pageSize: number = 10) {
  //   return this.userRepository.findAll(current, pageSize);
  // }

  findAll(page: number = 1, limit: number = 10): Promise<any[]> {
    const skip = (page - 1) * limit;
    return this.prismaService.systemUser.findMany({ skip, take: limit });
  }

  findOne(username: string): Promise<any> {
    return this.prismaService.systemUser.findUnique({
      where: { username },
      include: {
        usersRoles: {
          include: {
            role: {
              include: {
                rolesPermissions: true,
              },
            },
          },
        },
      },
    });
  }

  async create(userObj: any): Promise<any> {
    // 读取默认角色信息
    const DEFAULT_ROLE_ID = +this.configService.get('ROLE_ID');
    // 判断角色信息是否在数据库中
    // 写入角色与用户关系表，并创建用户
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        const roleIds =
          userObj && userObj.roleIds ? userObj.roleIds : [DEFAULT_ROLE_ID];
        const validRoleIds = [];

        for (const roleId of roleIds) {
          const role = await prisma.systemRole.findUnique({
            where: { id: roleId },
          });
          if (role) {
            validRoleIds.push(roleId);
          }
        }
        if (validRoleIds.length === 0) {
          validRoleIds.push(DEFAULT_ROLE_ID);
        }
        delete userObj['roleIds'];

        return prisma.systemUser.create({
          data: {
            ...userObj,
            UserRole: {
              create: validRoleIds.map((roleId) => ({ roleId })),
            },
          },
        });
      },
    );
  }
  async update(userObj: any): Promise<any> {
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        const { id, username, password, roles, ...rest } = userObj;
        // 更新的where条件
        const whereCond = id ? { id } : { username };
        let updateData: any = {};
        if (password) {
          const newHashPass = await argon2.hash(password);
          updateData.password = newHashPass;
        }
        updateData = { ...updateData, ...rest };

        const roleIds = [];

        // 角色 权限的更新，放置在前
        await Promise.all(
          roles.map(async (role) => {
            roleIds.push(role.id);
            const { permissions, ...restRole } = role;
            await prisma.systemRole.update({
              where: { id: role.id },
              data: {
                ...restRole,
                RolePermissions: {
                  deleteMany: {},
                  create: (permissions || []).map((permission) => ({
                    permission: {
                      connectOrCreate: {
                        where: {
                          name: permission.name,
                        },
                        create: permission,
                      },
                    },
                  })),
                },
              },
            });
          }),
        );

        // 用户 角色更新
        const updatedUser = await prisma.systemUser.update({
          where: whereCond,
          data: {
            ...updateData,
            usersRoles: {
              deleteMany: {},
              create: roleIds.map((roleId) => ({ roleId })),
            },
          },
          include: {
            usersRoles: true,
          },
        });

        return updatedUser;
      },
    );
  }
  delete(id: string): Promise<any> {
    return this.prismaService.systemUser.delete({
      where: { id: parseInt(id) },
    });
  }
}
