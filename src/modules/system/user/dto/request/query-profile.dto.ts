import { IsOptional } from 'class-validator';

export class QueryProfileDto {
  @IsOptional()
  phone: string;

  @IsOptional()
  gender: number;

  @IsOptional()
  nickname: string;

  @IsOptional()
  email: string;

  @IsOptional()
  remark: string;
}
