import { IsNumber, IsOptional } from 'class-validator';

export class QueryRoleDto {
  @IsOptional()
  name: string;

  @IsOptional()
  @IsNumber()
  status: number;
}
