import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserRepository } from '@/modules/system/user/user.repository';
import { JwtService } from '@nestjs/jwt';

import argon2 from 'argon2';
import { UserService } from '@/modules/system/user/user.service';
import { SigninUserDto } from '@/modules/system/auth/dto/signin-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private userService: UserService,
    private jwt: JwtService,
  ) {}
  // 登录
  async signIn(dto: SigninUserDto) {
    const { username, password } = dto;
    const user = await this.userRepository.findUserByUsername(username);
    if (!user) {
      throw new ForbiddenException('用户不存在');
    }

    const passwordValid = await argon2.verify(user.password, password);
    if (!passwordValid) {
      throw new ForbiddenException('用户名或者密码错误');
    }

    const token = await this.jwt.signAsync({
      username: user.username,
    });

    return {
      accessToken: token,
    };
  }
  // 注册
  async signUp(dto: SigninUserDto) {
    const { username, password } = dto;
    const user = await this.userRepository.findUserByUsername(username);
    if (user) {
      throw new ForbiddenException('用户已存在');
    }
    return await this.userService.create({ username, password });
  }
}
