import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from '@/modules/system/user/user.module';
import { JwtStrategy } from '@/modules/system/auth/strategies/jwt.strategy';
import { JwtPayloadService } from '@/modules/system/auth/strategies/jwt-payload.service';
import { PermissionModule } from '@/modules/system/permission/permission.module';
import { RoleModule } from '@/modules/system/role/role.module';
import { MenuModule } from '@/modules/system/menu/menu.module';

@Module({
  imports: [
    UserModule,
    RoleModule,
    MenuModule,
    PassportModule,
    PermissionModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET_KEY'),
          signOptions: { expiresIn: '1d' },
        };
      },
    }),
  ],
  providers: [AuthService, JwtStrategy, JwtPayloadService],
  controllers: [AuthController],
})
export class AuthModule {}
