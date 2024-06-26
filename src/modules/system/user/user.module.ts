import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { PermissionModule } from '@/modules/system/permission/permission.module';
import { RoleModule } from '@/modules/system/role/role.module';
import { PolicyModule } from '@/modules/system/policy/policy.module';
import { SharedModule } from '@/modules/system/shared/shared.module';
import { PaginationService } from '@/common/services/pagination.service';

@Module({
  imports: [RoleModule, PolicyModule, PermissionModule, SharedModule],
  providers: [UserService, UserRepository, PaginationService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
