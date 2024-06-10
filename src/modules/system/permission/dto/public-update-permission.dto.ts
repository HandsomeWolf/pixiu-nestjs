import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissionDto } from './create-permission.dto';
import { Expose, Transform, Type } from 'class-transformer';
import { CreatePolicyDto } from '@/modules/system/policy/dto/create-policy.dto';

export class PublicUpdatePermissionDto extends PartialType(
  CreatePermissionDto,
) {
  @Type(() => CreatePolicyDto)
  @Expose({ name: 'permissionsPolicies' })
  @Transform(({ value }) => {
    // 只需要保留除了encode以外的属性
    return value.map((item) => {
      const policy = item.policy;
      delete policy['encode'];
      delete item['policy'];
      item.policy = policy;
      return item;
    });
  })
  policies?: any;
}
