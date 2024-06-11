import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import argon2 from 'argon2';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryUserDto } from '@/modules/system/user/dto/request/query-user.dto';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(userDto: CreateUserDto, roleIds: number[]): Promise<any> {
    const { password } = userDto;

    const hashPassword = await argon2.hash(password);
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      // 步骤1: 创建用户
      const newUser = await prisma.user.create({
        data: {
          username: userDto.username,
          password: hashPassword,
        },
      });
      // 步骤2: 为新用户添加角色
      const userRoles = roleIds.map((roleId) => {
        return prisma.userRoleRelation.create({
          data: {
            userId: newUser.id,
            roleId: roleId,
          },
        });
      });

      // 等待所有角色关联操作完成
      await Promise.all(userRoles);

      // 返回新创建的用户
      return newUser;
    });
  }

  async update(userDto: any) {
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      const { id, username, password, roles, ...rest } = userDto;
      // 更新的where条件
      const whereCond = id ? { id } : { username };
      let updateData: any = {};
      if (password) {
        updateData.password = await argon2.hash(password);
      }
      updateData = { ...updateData, ...rest };

      const roleIds = [];

      // 角色 权限的更新，放置在前
      await Promise.all(
        roles.map(async (role) => {
          roleIds.push(role.id);
          const { permissions, ...restRole } = role;
          await prisma.role.update({
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
      return prisma.user.update({
        where: whereCond,
        data: {
          ...updateData,
          roles: {
            deleteMany: {},
            create: roleIds.map((roleId) => ({ roleId })),
          },
        },
        include: {
          roles: true,
        },
      });
    });
  }

  async existsByUsername(username: string): Promise<boolean> {
    const count = await this.prisma.user.count({
      where: { username },
    });
    return count > 0;
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });
  }

  async findAll(pagination: IPagination, dto: QueryUserDto) {
    const { skip, take } = pagination;
    const { username, roleId, phone, gender } = dto;
    return this.prisma.user.findMany({
      where: {
        username: { contains: username },
        roles: { some: { roleId } },
        profile: { phone, gender },
      },
      skip,
      take,
      include: {
        roles: {
          include: {
            role: true,
          },
        },
        profile: {
          select: {
            id: true,
            gender: true,
            phone: true,
          },
        },
      },
    });
  }

  delete(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }

  async updateProfile(userId: number, profileDto: UpdateProfileDto) {
    return this.prisma.userProfile.upsert({
      where: { userId },
      update: { ...profileDto },
      create: { ...profileDto, userId },
    });
  }

  async findOne(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: true,
                menus: true,
              },
            },
          },
        },
      },
    });
  }

  async findOneByUsernameWithRolesAndPermissions(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
                policies: {
                  include: {
                    policy: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }
}
