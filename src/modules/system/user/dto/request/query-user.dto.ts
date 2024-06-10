import { IsOptional } from 'class-validator';

export class QueryUserDto {
  @IsOptional()
  username: string;

  @IsOptional()
  roleId: number;

  @IsOptional()
  phone: string;

  @IsOptional()
  gender: number;

  @IsOptional()
  email: number;
}
