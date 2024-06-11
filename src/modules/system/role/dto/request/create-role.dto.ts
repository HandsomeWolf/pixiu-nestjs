import { plainToInstance, Transform, Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import {
  CreatePolicyDto,
  FieldType,
} from '@/modules/system/policy/dto/create-policy.dto';
import { CreateMenuDto } from '@/modules/system/menu/dto/request/create-menu.dto';
import { CreatePermissionDto } from '@/modules/system/permission/dto/required/create-permission.dto';

export interface PermissionType {
  id?: number;
  name: string;
  action: string;
  description?: string;
}

export interface menusType {
  id?: number;
  name: string;
}

export interface policiesType {
  id?: number;
  type: number;
  effect: 'can' | 'cannot';
  action: string;
  subject: string;
  fields?: FieldType;
  conditions?: FieldType;
  args?: FieldType;
  encode?: string;
}

abstract class Permission {
  abstract type: string;
}

class StringPermission extends Permission {
  type = 'string';
  value: string;
}

class DetailedPermission extends Permission {
  type = 'detailed';
  name: string;
  action: string;
}

export class CreateRoleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  // perssions -> 两种类型 1. string[] 2. 对象[]
  // 当传递为对象 -> 直接转换成对应的dto实例
  // @Type(() => CreatePermissionDto)
  // https://github.com/typestack/class-transformer#providing-more-than-one-type-option
  @Type(() => Permission, {
    discriminator: {
      property: 'type',
      subTypes: [
        { value: StringPermission, name: 'string' },
        { value: DetailedPermission, name: 'detail' },
      ],
    },
  })
  @Transform(({ value }) => {
    return value.map((item) => {
      if (typeof item === 'string') {
        // 当传递为string -> split -> {name, action}对象数组
        const parts = item.split(':');
        return plainToInstance(CreatePermissionDto, {
          name: item,
          action: parts[1] || '',
        });
      } else {
        return plainToInstance(CreatePermissionDto, item);
      }
    });
  })
  permissions?: PermissionType[] | string[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePolicyDto)
  policies?: any;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMenuDto)
  menus?: any;
}
