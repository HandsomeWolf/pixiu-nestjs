import { IsArray, IsInt, IsOptional } from 'class-validator';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';
import { Transform } from 'class-transformer';

export class CreateUserDto extends SignInUserDto {
  @Transform(({ value }) => {
    if (!Array.isArray(value)) {
      return value;
    }
    return value.map((o) => parseInt(o));
  })
  @IsArray({ message: 'roleIds必须是数组' })
  @IsOptional()
  @IsInt({ each: true, message: 'roleIds必须是数字数组' })
  roleIds?: number[];
}
