import { Exclude, Expose, Transform, Type } from 'class-transformer';
import {
  toBoolean,
  toOptionalArray,
  toOptionalValue,
} from '@/utils/classTransformer.utils';
import { ResponseStructureDto } from '@/common/dto/response/response-structure.dto';

class MenuItem {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  path: string;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  component: string;

  @Expose()
  @Type(() => MenuItem)
  @Transform(toOptionalArray, { toClassOnly: false })
  children: MenuItem[];

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  @Transform(({ obj }) => obj.meta?.hideChildrenInMenu, { toClassOnly: true })
  hideChildrenInMenu: boolean;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  hideInMenu: boolean;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  @Transform(({ obj }) => obj.meta?.icon, { toClassOnly: true })
  icon: string;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  disabled: boolean;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  disabledTooltip: boolean;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  flatMenu: boolean;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  target: string;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  noClosable: boolean;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  badge: string;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  query: string;

  @Expose()
  @Transform(toOptionalValue, { toClassOnly: false })
  guard: string;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  dot: boolean;

  @Expose()
  @Transform(toBoolean, { toClassOnly: false })
  isCache: boolean;

  @Exclude()
  parentId: number;
}

export class Authorized {
  @Expose()
  @Type(() => MenuItem)
  authorizedMenuItems: MenuItem[];

  @Expose()
  authorizedButtons: string[];
}

export class PermissionsResponseDto extends ResponseStructureDto {
  @Expose()
  @Type(() => Authorized)
  data: Authorized;
}
