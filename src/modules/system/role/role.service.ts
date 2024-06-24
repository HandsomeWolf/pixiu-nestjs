import { Injectable } from '@nestjs/common';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryRoleDto } from '@/modules/system/role/dto/request/query-role.dto';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { CreateRoleDto } from '@/modules/system/role/dto/request/create-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/request/update-role.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RoleService {
  constructor(
    private roleRepository: RoleRepository,
    private configService: ConfigService,
  ) {}

  /**
   * 检查给定的角色ID数组是否包含在管理员白名单中
   * @param roleIds 用户的角色ID数组
   * @returns 是否为管理员
   */
  isAdmin(roleIds: number[]): boolean {
    const whitelist = this.configService.get('ROLE_WHITELIST_ID');
    if (!whitelist) {
      return false;
    }

    const whitelistArr = whitelist.split(',').map(Number);
    return whitelistArr.some((id) => roleIds.includes(id));
  }
  async create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.create(createRoleDto);
  }

  findAll(pagination: IPagination, dto: QueryRoleDto) {
    return this.roleRepository.findAll(pagination, dto);
  }

  findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  findAllByIds(roleIds: number[]) {
    return this.roleRepository.findAllByIds(roleIds);
  }

  findMenuIdsByRoleIds(roleIds: number[]) {
    return this.roleRepository.findMenuIdsByRoleIds(roleIds);
  }
  findPermissionIdsByRoleIds(roleIds: number[]) {
    return this.roleRepository.findPermissionIdsByRoleIds(roleIds);
  }

  async findPermissionIdsWithMenuIdsByIds(roleIds: number[]) {
    const roles =
      await this.roleRepository.findPermissionIdsWithMenuIdsByIds(roleIds);

    const permissionIds: number[] = [];
    const menuIds: number[] = [];

    roles.forEach((role) => {
      role.permissions.forEach((permission) => {
        if (!permissionIds.includes(permission.permissionId)) {
          permissionIds.push(permission.permissionId);
        }
      });
      role.menus.forEach((menu) => {
        if (!menuIds.includes(menu.menuId)) {
          menuIds.push(menu.menuId);
        }
      });
    });

    return {
      permissionIds,
      menuIds,
    };
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  delete(id: number) {
    return this.roleRepository.delete(id);
  }

  async findRoleIdsByIds(roleIds: number[]) {
    return this.roleRepository.findRoleIdsByIds(roleIds);
  }
}
