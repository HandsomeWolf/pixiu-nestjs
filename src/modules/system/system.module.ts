import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { PolicyModule } from './policy/policy.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MenuModule, UserModule, LogModule, RoleModule, PermissionModule, PolicyModule, AuthModule],
})
export class SystemModule {}
