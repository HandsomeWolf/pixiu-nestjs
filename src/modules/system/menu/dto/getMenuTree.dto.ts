import { CreateSystemMenuDto } from '@/modules/system/menu/dto/createSystemMenu.dto';

export class GetMenuTreeDto extends CreateSystemMenuDto {
  id: number;

  children: GetMenuTreeDto[];
}
