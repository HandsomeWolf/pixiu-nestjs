import {
  IsOptional,
  IsString,
  IsArray,
  IsInt,
  IsEmail,
  Min,
  Max,
  IsDateString,
  IsEnum,
} from 'class-validator';

enum Gender {
  Male = 0,
  Female = 1,
}

export class QueryUserDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  roleIds?: number[];

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(Gender, { message: 'gender 必须是 0 或 1' })
  gender?: Gender;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsInt()
  status?: number;

  @IsOptional()
  @IsDateString()
  startTime?: string;

  @IsOptional()
  @IsDateString()
  endTime?: string;
}
