import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateSystemMenuDto } from '@/modules/system/menu/dto/createSystemMenu.dto';
import { OmitType } from '@nestjs/mapped-types';

export class UpdateSystemMenuDto extends OmitType(CreateSystemMenuDto, [
  'parentId',
]) {
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNotEmpty()
  @IsNumber()
  parentId: number;
}
