import { PaginationDto } from '@/common/dto/pagination.dto';
import { IsOptional } from 'class-validator';

export class QueryRoleDto {
  @IsOptional()
  name: string;
}
