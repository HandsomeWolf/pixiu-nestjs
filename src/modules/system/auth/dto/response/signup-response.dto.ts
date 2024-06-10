import { Exclude, Expose, Transform } from 'class-transformer';

// 使用@Exclude()装饰器排除所有属性，然后只为需要的属性添加@Expose()
@Exclude()
export class SignupResponseDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  // @Exclude()
  // password: string;

  @Transform(({ value }) => {
    return value.map((item) => item.roleId);
  })
  @Expose({ name: 'UserRole' })
  roles: any;
}
