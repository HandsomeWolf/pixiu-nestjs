import { IsOptional } from 'class-validator';

export class QueryUserDto {
  @IsOptional()
  username: string;

  @IsOptional()
  roleIds: number[];

  @IsOptional()
  phone: string;

  @IsOptional()
  gender: number;

  @IsOptional()
  email: string;

  @IsOptional()
  status: number;

  @IsOptional()
  startTime: string;

  @IsOptional()
  endTime: string;
}
