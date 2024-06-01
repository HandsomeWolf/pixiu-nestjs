// user.repository.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateUserDto } from '@/modules/system/user/dto/create-user.dto';
import * as argon2 from 'argon2';
import { UpdateUserDto } from '@/modules/system/user/dto/update-user.dto';
import { UpdatePasswordDto } from '@/modules/system/user/dto/update-password.dto';
import { UserAbstractRepository } from '@/modules/system/user/user-abstract.repository';

@Injectable()
export class UserRepository {
  constructor(private prismaService: PrismaService) {}

  async create(userObj: CreateUserDto, roleIds: number[]): Promise<any> {
    const { password, ...rest } = userObj;

    const hashedPassword = await argon2.hash(password);
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        return prisma.systemUser.create({
          data: {
            ...rest,
            password: hashedPassword,
            usersRoles: {
              create: roleIds.map((roleId) => ({ roleId })),
            },
          },
        });
      },
    );
  }

  async updateUserAndRoles(
    userInfo: UpdateUserDto,
    roleIds: number[],
  ): Promise<any> {
    const { id, username } = userInfo;
    // 更新的where条件
    const whereCond = id ? { id } : { username };
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        return prisma.systemUser.update({
          where: whereCond,
          data: {
            ...userInfo,
            usersRoles: {
              deleteMany: {},
              create: roleIds.map((roleId) => ({ roleId })),
            },
          },
          include: {
            usersRoles: true,
          },
        });
      },
    );
  }

  //
  // // 根据id校验用户是否存在
  // async checkUserExistById(userId: number): Promise<boolean> {
  //   const user = await this.prismaService.systemUser.findUnique({
  //     where: { id: userId },
  //   });
  //   return user !== null;
  // }
  //
  // // 根据username校验用户是否存在
  // async checkUserExistByUsername(username: string): Promise<boolean> {
  //   const user = await this.prismaService.systemUser.findUnique({
  //     where: { username },
  //   });
  //   return user !== null;
  // }

  async updatePasswordById(
    userId: number,
    updatePasswordDto: UpdatePasswordDto,
  ): Promise<boolean> {
    const user = await this.prismaService.systemUser.findUnique({
      where: { id: userId },
    });
    if (!user) {
      throw new Error('用户不存在');
    }

    const { currentPassword, newPassword } = updatePasswordDto;

    const passwordValid = await argon2.verify(user.password, currentPassword);
    if (!passwordValid) {
      throw new Error('密码错误');
    }

    const hashedNewPassword = await argon2.hash(newPassword);
    await this.prismaService.systemUser.update({
      where: { id: userId },
      data: { password: hashedNewPassword },
    });

    return true;
  }

  async findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prismaService.systemUser.findMany({ skip, take: limit });
  }

  findUserByUsername(username: string) {
    return this.prismaService.systemUser.findUnique({ where: { username } });
  }

  findUserWithRolesAndPermissions(username: string): Promise<any> {
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

  deleteById(id: number) {
    return this.prismaService.systemUser.delete({ where: { id } });
  }
}
