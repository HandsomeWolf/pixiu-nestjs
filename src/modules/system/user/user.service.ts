import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '@/modules/system/user/user.repository';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryUserDto } from '@/modules/system/user/dto/request/query-user.dto';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';

@Injectable()
export class UserService {
  constructor(
    private configService: ConfigService,
    private userRepository: UserRepository,
    private roleRepository: RoleRepository,
    private prismaService: PrismaService,
  ) {}

  async create(userDto: CreateUserDto) {
    // 读取默认角色信息
    const roleIds = userDto.roleIds || [
      this.configService.get('ROLE_DEFAULT_ID'),
    ];

    // 判断角色信息是否在数据库中
    const existingRoles =
      await this.roleRepository.findAllByExistingRoles(roleIds);

    // 然后你可以检查哪些ID存在，哪些不存在
    const existingRoleIds = existingRoles.map((role) => role.id);
    const missingRoleIds = roleIds.filter(
      (id) => !existingRoleIds.includes(id),
    );

    if (missingRoleIds.length > 0) {
      throw new BadRequestException(`角色id：${missingRoleIds} 不存在`);
    }

    return this.userRepository.createUserWithRoles(userDto, existingRoleIds);
  }

  // async update(userObj: UpdateUserDto): Promise<any> {
  //   return await this.prismaService.$transaction(
  //     async (prisma: PrismaService) => {
  //       // 角色 权限的更新，放置在前
  //       const roleIds = await this.roleRepository.updateRoles(userObj.roles);
  //       return await this.userRepository.updateUserAndRoles(userObj, roleIds);
  //     },
  //   );
  // }

  async findAll(pagination: IPagination, dto: QueryUserDto) {
    const users = await this.userRepository.findAll(pagination, dto);
    return users.map((user) => {
      const roleIds = user.usersRoles.map((userRole) => userRole.roleId);
      const roleNames = user.usersRoles.map((userRole) => userRole.role.name);
      return {
        ...user,
        roleIds,
        roleNames,
      };
    });
  }

  async findOne(username: string) {
    return this.prismaService.systemUser.findUnique({
      where: { username },
      include: {
        usersRoles: {
          include: {
            role: {
              include: {
                rolesPermissions: true,
                rolesMenus: true,
              },
            },
          },
        },
      },
    });
  }

  async updateProfile(id: number, profileDto: UpdateProfileDto) {
    return this.userRepository.updateProfile(id, profileDto);
  }
  // async update(userObj: any): Promise<any> {
  //   return await this.prismaService.$transaction(
  //     async (prisma: PrismaService) => {
  //       const { id, username, password, roles, ...rest } = userObj;
  //       // 更新的where条件
  //       const whereCond = id ? { id } : { username };
  //       let updateData: any = {};
  //       if (password) {
  //         const newHashPass = await argon2.hash(password);
  //         updateData.password = newHashPass;
  //       }
  //       updateData = { ...updateData, ...rest };
  //
  //       const roleIds = [];
  //
  //       // 角色 权限的更新，放置在前
  //       await Promise.all(
  //         roles.map(async (role) => {
  //           roleIds.push(role.id);
  //           const { permissions, ...restRole } = role;
  //           await prisma.systemRole.update({
  //             where: { id: role.id },
  //             data: {
  //               ...restRole,
  //               RolePermissions: {
  //                 deleteMany: {},
  //                 create: (permissions || []).map((permission) => ({
  //                   permission: {
  //                     connectOrCreate: {
  //                       where: {
  //                         name: permission.name,
  //                       },
  //                       create: permission,
  //                     },
  //                   },
  //                 })),
  //               },
  //             },
  //           });
  //         }),
  //       );
  //
  //       // 用户 角色更新
  //       const updatedUser = await prisma.systemUser.update({
  //         where: whereCond,
  //         data: {
  //           ...updateData,
  //           usersRoles: {
  //             deleteMany: {},
  //             create: roleIds.map((roleId) => ({ roleId })),
  //           },
  //         },
  //         include: {
  //           usersRoles: true,
  //         },
  //       });
  //
  //       return updatedUser;
  //     },
  //   );
  // }
  delete(id: number) {
    return this.prismaService.systemUser.delete({
      where: { id },
    });
  }
}
