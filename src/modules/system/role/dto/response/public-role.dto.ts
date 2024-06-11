import { Expose, Transform } from 'class-transformer';
import { CreateRoleDto } from '@/modules/system/role/dto/request/create-role.dto';

export class PublicRoleDto extends CreateRoleDto {
  @Transform(({ value }) => {
    return value.map((permission) => permission.Permission.name);
  })
  @Expose({ name: 'permissions' })
  permissions: any[];

  @Transform(({ value }) => {
    return value.map((value) => {
      const policy = value.policy;
      delete policy['encode'];
      delete value['policy'];
      value.policy = policy;
      // TODO fields, conditions, args Transform
      return value;
    });
  })
  @Expose({ name: 'policies' })
  policies: any[];
}
