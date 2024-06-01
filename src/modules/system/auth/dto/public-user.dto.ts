// import { IsNotEmpty, IsString } from 'class-validator';
import { Exclude, Expose, Transform } from 'class-transformer';
import { SigninUserDto } from './signin-user.dto';

export class PublicUserDto extends SigninUserDto {
  @Expose()
  id: string;

  @Expose()
  username: string;

  @Exclude()
  password: string;

  @Transform(({ value }) => {
    return value.map((item) => ({
      id: item.Role.id,
      permissions: item.Role.RolePermissions,
    }));
  })
  @Expose({ name: 'UserRole' })
  roles: any;
}
