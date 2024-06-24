import { Expose } from 'class-transformer';
import { ResponseStructureDto } from '@/common/dto/response/response-structure.dto';

export class SignInResponseDto extends ResponseStructureDto {
  @Expose()
  data: string;
}
