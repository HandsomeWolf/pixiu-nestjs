import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@/modules/system/auth/auth.service';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { SignupResponseDto } from '@/modules/system/auth/dto/response/signup-response.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signIn')
  signIn(@Body() dto: SignInUserDto) {
    return this.authService.signIn(dto);
  }

  @Post('signUp')
  @Serialize(SignupResponseDto)
  // 使用自定义管道转换数据，但效果不如放在dto文件中好
  // signUp(@Body(CreateUserPipe) dto: CreateUserDto) {
  signUp(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto);
  }
}
