import { IsArray, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSystemMenuDto {
  @IsString()
  name: string;

  @IsString()
  path: string;

  @IsString()
  @IsOptional()
  icon: string;

  @IsNumber()
  @Type(() => Number)
  orderNo: number;

  @IsNumber()
  @Type(() => Number)
  parentId: number;

  @IsNumber()
  @Type(() => Number)
  @IsIn([0, 1, 2])
  type: number;

  @IsNumber()
  @IsOptional()
  noClosable: number;

  @IsNumber()
  @IsOptional()
  hidden: number;

  @IsString()
  @IsOptional()
  activeMenu: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  guard: string[];

  @IsNumber()
  @IsOptional()
  dot: number;

  @IsString()
  @IsOptional()
  badge: string;

  @IsNumber()
  @IsOptional()
  target: number;
}
