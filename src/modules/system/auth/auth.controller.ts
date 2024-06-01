import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '@/modules/system/auth/auth.service';
import { SigninUserDto } from '@/modules/system/auth/dto/signin-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('signIn')
  signIn(@Body() dto: SigninUserDto) {
    return this.authService.signIn(dto);
  }

  @Post('signUp')
  signUp(@Body() dto: SigninUserDto) {
    return this.authService.signUp(dto);
  }
}
