import { Exclude, Expose, Transform } from 'class-transformer';
import { SignInUserDto } from '@/modules/system/auth/dto/request/signin-user.dto';

// @Exclude()
export class PublicUserDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  email: string;

  @Expose()
  roleIds: number[];

  // @Exclude()
  // password: string;

  // @Transform(({ value }) => {
  //   return value.map((item) => ({
  //     id: item.Role.id,
  //     permissions: item.Role.RolePermissions,
  //   }));
  // })
  // @Expose({ name: 'UserRole' })
  // roles: any;
}
