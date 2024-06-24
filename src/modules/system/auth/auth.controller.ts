import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '@/modules/system/auth/auth.service';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';
import { Serialize } from '@/core/decorators/serialize.decorator';
import { SignupResponseDto } from '@/modules/system/auth/dto/response/signup-response.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtPayload } from '@/modules/system/auth/strategies/jwt-payload.service';
import { PermissionService } from '@/modules/system/permission/permission.service';
import { PermissionsResponseDto } from '@/modules/system/auth/dto/response/permissions-response.dto';
import { UserInfoResponseDto } from '@/modules/system/auth/dto/response/user-info-response.dto';
import { SignInResponseDto } from '@/modules/system/auth/dto/response/sign-in-response.dto';
import { ResponseStructureDto } from '@/common/dto/response/response-structure.dto';
import { successResponse } from '@/utils/response.utils';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private permissionService: PermissionService,
  ) {}

  @Post('signIn')
  @HttpCode(HttpStatus.OK)
  @Serialize(SignInResponseDto)
  async signIn(@Body() dto: SignInUserDto): Promise<ResponseStructureDto> {
    const resultData = await this.authService.signIn(dto);
    return successResponse(resultData);
    // return errorResponse('自定义消息', 1000, 3);
  }

  @Post('signUp')
  @Serialize(SignupResponseDto)
  // 使用自定义管道转换数据，但效果不如放在dto文件中好
  // signUp(@Body(CreateUserPipe) dto: CreateUserDto) {
  signUp(@Body() dto: CreateUserDto) {
    return this.authService.signUp(dto);
  }

  @Get('userInfo')
  @Serialize(UserInfoResponseDto)
  @UseGuards(AuthGuard('jwt'))
  async findUserInfo(@Req() req: JwtPayload): Promise<ResponseStructureDto> {
    const resultData = await this.authService.findUserInfo(req.user.userId);
    return successResponse(resultData);
  }

  @Get('permissions')
  @Serialize(PermissionsResponseDto)
  @UseGuards(AuthGuard('jwt'))
  async findPermissions(@Req() req: JwtPayload): Promise<ResponseStructureDto> {
    const resultData = await this.authService.findPermissionsWithMenusByRoleIds(
      req.user.roleIds,
    );
    return successResponse(resultData);
  }
}
