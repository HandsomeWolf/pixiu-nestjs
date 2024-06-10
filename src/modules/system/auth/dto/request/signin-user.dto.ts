import { IsNotEmpty, Length } from 'class-validator';

export class SignInUserDto {
  @IsNotEmpty({
    message: '用户名不能为空',
  })
  @Length(5, 20, {
    message: '用户名长度必须是大于5小于20位的字符',
  })
  username: string;

  @IsNotEmpty({
    message: '密码不能为空',
  })
  @Length(6, 32, {
    message: ({ constraints }) => {
      return `密码长度必须是大于${constraints[0]}小于${constraints[1]}位的字符`;
    },
  })
  password: string;
}
