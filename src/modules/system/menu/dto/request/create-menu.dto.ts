import {
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class Meta {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  layout?: string;

  @IsOptional()
  @IsInt()
  order?: number;

  @IsOptional()
  @IsString()
  icon?: string;

  @IsOptional()
  @IsBoolean()
  hideMenu?: boolean;

  @IsOptional()
  @IsBoolean()
  disabled?: boolean;
}

export class CreateMenuDto {
  @IsInt()
  @IsOptional()
  id?: number;

  @IsString()
  @ValidateIf((o) => !o.id)
  name: string;

  @IsString()
  @ValidateIf((o) => !o.id)
  path: string;

  @IsString()
  @IsOptional()
  @ValidateIf((o) => !o.id)
  component: string;

  @IsOptional()
  @Type(() => Meta)
  @ValidateNested({ each: true })
  @ValidateIf((o) => !o.id)
  meta: Meta;

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

  @IsOptional()
  @Type(() => CreateMenuDto)
  @ValidateIf((o) => !o.id)
  children: CreateMenuDto[];
}
