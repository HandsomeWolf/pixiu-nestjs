import { Module } from '@nestjs/common';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { PermissionRepository } from '@/modules/system/permission/permission.repository';
import { MenuModule } from '@/modules/system/menu/menu.module';
import { RoleModule } from '@/modules/system/role/role.module';

@Module({
  imports: [MenuModule, RoleModule],
  providers: [PermissionService, PermissionRepository],
  controllers: [PermissionController],
  exports: [PermissionService],
})
export class PermissionModule {}
