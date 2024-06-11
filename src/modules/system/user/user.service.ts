import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRepository } from '@/modules/system/user/user.repository';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryUserDto } from '@/modules/system/user/dto/request/query-user.dto';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';
import { UpdateUserDto } from '@/modules/system/user/dto/request/update-user.dto';

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

    return this.userRepository.create(userDto, existingRoleIds);
  }

  async update(dto: UpdateUserDto) {
    return this.userRepository.update(dto);
  }

  async findAll(pagination: IPagination, dto: QueryUserDto) {
    const users = await this.userRepository.findAll(pagination, dto);
    return users.map((user) => {
      const roleIds = user.roles.map((userRole) => userRole.roleId);
      const roleNames = user.roles.map((userRole) => userRole.role.name);
      return {
        ...user,
        roleIds,
        roleNames,
      };
    });
  }

  async findOne(username: string) {
    return this.userRepository.findOne(username);
  }

  async updateProfile(id: number, profileDto: UpdateProfileDto) {
    return this.userRepository.updateProfile(id, profileDto);
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
