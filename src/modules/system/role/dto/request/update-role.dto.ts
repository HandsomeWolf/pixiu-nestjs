import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from '@/modules/system/role/dto/request/create-role.dto';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {}
