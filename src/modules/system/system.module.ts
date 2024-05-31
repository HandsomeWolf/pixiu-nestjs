import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { UserModule } from './user/user.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [MenuModule, UserModule, LogModule],
})
export class SystemModule {}
