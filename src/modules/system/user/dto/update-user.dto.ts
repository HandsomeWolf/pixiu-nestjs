import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from '@/modules/system/user/dto/create-user.dto';
import { IsArray, IsInt, IsString, ValidateIf } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateRoleDto } from '@/modules/system/role/dto/create-role.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {
  @IsInt()
  @ValidateIf((o) => !o.username)
  id?: number;

  @IsString()
  @ValidateIf((o) => !o.id)
  username?: string;

  @IsArray()
  @Type(() => CreateRoleDto)
  roles?: any[];
}
