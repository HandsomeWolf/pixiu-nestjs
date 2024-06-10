import {
  CreateMenuDto,
  Meta,
} from '@/modules/system/menu/dto/request/create-menu.dto';
import { IsOptional, ValidateIf, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class MenuTreeResponseDto extends CreateMenuDto {
  id: number;

  @IsOptional()
  @Type(() => Meta)
  @ValidateNested({ each: true })
  @ValidateIf((o) => !o.id)
  children: MenuTreeResponseDto[];
}
