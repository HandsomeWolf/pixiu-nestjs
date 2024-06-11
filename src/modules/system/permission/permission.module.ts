import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionRepository } from '@/modules/system/permission/permission.repository';

@Module({
  providers: [PermissionService, PermissionRepository],
  controllers: [PermissionController],
  exports: [PermissionService],
})
export class PermissionModule {}
