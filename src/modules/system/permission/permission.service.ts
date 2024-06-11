import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '@/modules/system/permission/dto/required/create-permission.dto';
import { UpdatePermissionDto } from '@/modules/system/permission/dto/required/update-permission.dto';
import { PermissionRepository } from '@/modules/system/permission/permission.repository';
import { Pagination } from '@/common/decorators/pagination.decorator';
import { IPagination } from '@/common/interface/pagination.interface';

@Injectable()
export class PermissionService {
  constructor(private permissionRepository: PermissionRepository) {}
  async create(dto: CreatePermissionDto) {
    return this.permissionRepository.create(dto);
  }

  findAll(pagination: IPagination) {
    return this.permissionRepository.findAll(pagination);
  }

  findOne(id: number) {
    return this.permissionRepository.findOne(id);
  }

  findByName(name: string) {
    return this.permissionRepository.findByName(name);
  }

  update(id: number, dto: UpdatePermissionDto) {
    return this.permissionRepository.update(id, dto);
  }

  delete(id: number) {
    return this.permissionRepository.delete(id);
  }
}
