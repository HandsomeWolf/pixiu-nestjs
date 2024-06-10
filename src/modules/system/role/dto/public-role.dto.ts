import { Expose, Transform } from 'class-transformer';
import { CreateRoleDto } from './create-role.dto';

export class PublicRoleDto extends CreateRoleDto {
  @Transform(({ value }) => {
    return value.map((permission) => permission.Permission.name);
  })
  @Expose({ name: 'rolesPermissions' })
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
  @Expose({ name: 'rolesPolicies' })
  policies: any[];
}
