import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import argon2 from 'argon2';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryUserDto } from '@/modules/system/user/dto/request/query-user.dto';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';
import { UpdateUserDto } from '@/modules/system/user/dto/request/update-user.dto';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async createUserWithRoles(
    userDto: CreateUserDto,
    roleIds: number[],
  ): Promise<any> {
    const { password } = userDto;

    const hashPassword = await argon2.hash(password);
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      // 步骤1: 创建用户
      const newUser = await prisma.systemUser.create({
        data: {
          username: userDto.username,
          password: hashPassword,
        },
      });
      // 步骤2: 为新用户添加角色
      const userRoles = roleIds.map((roleId) => {
        return prisma.systemUserRoleRelation.create({
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

  async update(userDto: UpdateUserDto, roleIds: number[]);

  // async updateUserAndRoles(
  //   userInfo: UpdateUserDto,
  //   roleIds: number[],
  // ): Promise<any> {
  //   const { id, username } = userInfo;
  //   // 更新的where条件
  //   const whereCond = id ? { id } : { username };
  //   return await this.prisma.$transaction(async (prisma: PrismaService) => {
  //     return prisma.systemUser.update({
  //       where: whereCond,
  //       data: {
  //         ...userInfo,
  //         usersRoles: {
  //           deleteMany: {},
  //           create: roleIds.map((roleId) => ({ roleId })),
  //         },
  //       },
  //       include: {
  //         usersRoles: true,
  //       },
  //     });
  //   });
  // }

  // async updatePasswordById(
  //   userId: number,
  //   updatePasswordDto: UpdatePasswordDto,
  // ): Promise<boolean> {
  //   const user = await this.prisma.systemUser.findUnique({
  //     where: { id: userId },
  //   });
  //   if (!user) {
  //     throw new Error('用户不存在');
  //   }
  //
  //   const { currentPassword, newPassword } = updatePasswordDto;
  //
  //   const passwordValid = await argon2.verify(user.password, currentPassword);
  //   if (!passwordValid) {
  //     throw new Error('密码错误');
  //   }
  //
  //   const hashedNewPassword = await argon2.hash(newPassword);
  //   await this.prisma.systemUser.update({
  //     where: { id: userId },
  //     data: { password: hashedNewPassword },
  //   });
  //
  //   return true;
  // }

  async existsByUsername(username: string): Promise<boolean> {
    const count = await this.prisma.systemUser.count({
      where: { username },
    });
    return count > 0;
  }

  // async findAll(skip: number, take: number) {
  //   const data = await this.prisma.systemUser.findMany({ skip, take });
  //   const totalCount = await this.prisma.systemUser.count();
  //   return {
  //     data,
  //     totalCount,
  //   };
  // }

  // findOneById(id: number) {
  //   return this.prisma.systemUser.findUnique({ where: { id } });
  // }

  findOneByUsername(username: string) {
    return this.prisma.systemUser.findUnique({
      where: { username },
      include: {
        usersRoles: {
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
    return this.prisma.systemUser.findMany({
      where: {
        username: { contains: username },
        usersRoles: { some: { roleId } },
        profile: { phone, gender },
      },
      skip,
      take,
      include: {
        usersRoles: {
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

  deleteById(id: number) {
    return this.prisma.systemUser.delete({ where: { id } });
  }

  async updateProfile(userId: number, profileDto: UpdateProfileDto) {
    return this.prisma.systemUserProfile.upsert({
      where: { userId },
      update: { ...profileDto },
      create: { ...profileDto, userId },
    });
  }

  async findOneByUsernameWithRolesAndPermissions(username: string) {
    return this.prisma.systemUser.findUnique({
      where: { username },
      include: {
        usersRoles: {
          include: {
            role: {
              include: {
                rolesPermissions: {
                  include: {
                    permission: true,
                  },
                },
                rolesPolicies: {
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
