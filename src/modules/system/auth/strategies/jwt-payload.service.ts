import { ForbiddenException, Injectable } from '@nestjs/common';
import argon2 from 'argon2';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '@/modules/system/user/user.service';

export interface JwtPayload extends Request {
  user: {
    userId: number;
    username: string;
    roleIds: number[];
  };
}

@Injectable()
export class JwtPayloadService {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}
  async createPayload(dto: SignInUserDto) {
    const { username, password } = dto;

    const user = await this.userService.findUserWithRoleIdsByUsername(username);
    if (!user) {
      throw new ForbiddenException('用户不存在');
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }
    return await this.jwtService.signAsync({
      userId: user.id,
      username: user.username,
      roleIds: user.roles.map((role) => role.roleId),
    } as JwtPayload['user']);
  }

  validatePayload(payload: JwtPayload['user']): JwtPayload['user'] {
    return {
      userId: payload.userId,
      username: payload.username,
      roleIds: payload.roleIds,
    };
  }
}
