import { IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class QuerySystemLogDto {
  @IsString()
  @IsOptional()
  api: string;

  @IsNumber()
  @IsOptional()
  type: number;

  @IsString()
  @IsOptional()
  ip: string;

  @IsString()
  @IsOptional()
  username: string;

  @IsString()
  @IsOptional()
  startTime: string;

  @IsString()
  @IsOptional()
  endTime: string;

  @IsNumber()
  @Type(() => Number)
  @IsIn([0, 1])
  status: number;

  @IsNumber()
  current: number;

  @IsNumber()
  pageSize: number;
}
