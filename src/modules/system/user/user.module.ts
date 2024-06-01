import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { RoleRepository } from '@/modules/system/role/role.repository';
import { PermissionModule } from '@/modules/system/permission/permission.module';
import { RoleModule } from '@/modules/system/role/role.module';
import { PolicyModule } from '@/modules/system/policy/policy.module';

@Module({
  imports: [RoleModule, PolicyModule, PermissionModule],
  providers: [UserService, UserRepository, RoleRepository],
  controllers: [UserController],
  exports: [UserService, UserRepository],
})
export class UserModule {}
