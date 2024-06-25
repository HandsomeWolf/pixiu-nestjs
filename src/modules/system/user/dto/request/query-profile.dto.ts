import { OmitType } from '@nestjs/mapped-types';
import { UpdateProfileDto } from '@/modules/system/user/dto/request/update-profile.dto';

export class QueryProfileDto extends OmitType(UpdateProfileDto, ['avatar']) {}
