import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserRepository } from '@/modules/system/user/user.repository';
import { JwtService } from '@nestjs/jwt';

import argon2 from 'argon2';
import { UserService } from '@/modules/system/user/user.service';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { JwtPayloadUser } from '@/common/interface/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
    private jwt: JwtService,
  ) {}
  // 登录
  async signIn(dto: SignInUserDto) {
    const { username, password } = dto;
    const user = await this.userRepository.findOneByUsername(username);
    if (!user) {
      throw new ForbiddenException('用户不存在');
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }

    const token = await this.jwt.signAsync({
      userId: user.id,
      username: user.username,
      // roleId: user.usersRoles[0].roleId,
    } as JwtPayloadUser['user']);

    return {
      accessToken: token,
    };
  }
  // 注册
  async signUp(dto: CreateUserDto) {
    const { username } = dto;
    const user = await this.userRepository.findOneByUsername(username);
    if (user) {
      throw new ForbiddenException('用户已存在');
    }
    return await this.userService.create(dto);
  }
}
