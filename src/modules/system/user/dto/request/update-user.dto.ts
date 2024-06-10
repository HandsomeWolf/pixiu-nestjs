import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsArray, IsInt, IsOptional } from 'class-validator';
import { Transform } from 'class-transformer';
import { CreateUserDto } from '@/modules/system/user/dto/request/create-user.dto';

export class UpdateUserDto extends PartialType(
  OmitType(CreateUserDto, ['password']),
) {
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
