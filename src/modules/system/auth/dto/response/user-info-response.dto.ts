import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { ResponseStructureDto } from '@/common/dto/response/response-structure.dto';

export class SignInResponseDto extends ResponseStructureDto {
  @Expose()
  data: string;
}

class UserInfo {
  @Expose({ name: 'id' })
  userId: number;

  @Expose()
  username: string;

  @Expose()
  createdAt: Date;

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

  @Expose()
  @Transform(({ obj }) => obj.profile?.nickname, { toClassOnly: true })
  nickname: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.email, { toClassOnly: true })
  email: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.phone, { toClassOnly: true })
  phone: string;

  @Expose()
  @Transform(({ obj }) => obj.profile?.avatar, { toClassOnly: true })
  avatar: string;

  @Exclude()
  profile: any;

  @Exclude()
  roles: any;
}

export class UserInfoResponseDto extends ResponseStructureDto {
  @Expose()
  @Type(() => UserInfo)
  data: UserInfo;
}
