import { IsNotEmpty, IsNumber } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import { CreateMenuDto } from '@/modules/system/menu/dto/request/create-menu.dto';

export class UpdateMenuDto extends OmitType(CreateMenuDto, ['parentId']) {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  parentId: number;
}
