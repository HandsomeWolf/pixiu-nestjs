import { Injectable } from '@nestjs/common';
import { IPagination } from '@/common/interface/pagination.interface';
import { QueryRoleDto } from '@/modules/system/role/dto/request/query-role.dto';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { CreateRoleDto } from '@/modules/system/role/dto/request/create-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/request/update-role.dto';

@Injectable()
export class RoleService {
  constructor(private roleRepository: RoleRepository) {}
  async create(createRoleDto: CreateRoleDto) {
    return this.roleRepository.create(createRoleDto);
  }

  findAll(pagination: IPagination, dto: QueryRoleDto) {
    return this.roleRepository.findAll(pagination, dto);
  }

  findOne(id: number) {
    return this.roleRepository.findOne(id);
  }

  findAllByIds(ids: number[]) {
    return this.roleRepository.findAllByIds(ids);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  delete(id: number) {
    return this.roleRepository.delete(id);
  }
}
