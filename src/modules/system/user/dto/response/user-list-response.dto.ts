import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { PaginationResponseDto } from '@/common/dto/response/pagination-response.dto';

export class UserListResponseDto extends PaginationResponseDto<UserItem> {
  @Type(() => UserItem)
  data: UserItem[];
}

class UserItem {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  createdAt: string;

  @Expose()
  status: number;

  @Expose()
  type: number;

  @Expose()
  sortOrder: number;

  // profile info

  @Expose()
  @Transform(({ obj }) => obj.profile?.nickname, {
    toClassOnly: true,
  })
  nickname: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.email, {
    toClassOnly: true,
  })
  email: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.phone, {
    toClassOnly: true,
  })
  phone: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.avatar, {
    toClassOnly: true,
  })
  avatar: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.remark, {
    toClassOnly: true,
  })
  remark: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.gender, {
    toClassOnly: true,
  })
  gender: number;

  // role info

  @Expose()
  @Transform(({ obj }) => obj.roles.map((role) => role.role.id), {
    toClassOnly: true,
  })
  roleIds: number[];

  @Expose()
  @Transform(({ obj }) => obj.roles.map((role) => role.role.name), {
    toClassOnly: true,
  })
  roleNames: string[];

  @Exclude()
  roles: any[];

  @Exclude()
  profile: any;

  @Exclude()
  unionId: any;

  @Exclude()
  openId: any;
}
