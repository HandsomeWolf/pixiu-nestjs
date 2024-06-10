import { PartialType } from '@nestjs/mapped-types';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsArray } from 'class-validator';
import { UpdateUserDto } from '@/modules/system/user/dto/request/update-user.dto';

export class PublicUpdateUserDto extends PartialType(UpdateUserDto) {
  @Exclude()
  password?: string;

  @IsArray()
  @Expose({ name: 'usersRoles' })
  @Transform(({ value }) => value.map((item) => item.roleId))
  roleIds: number[];
}
