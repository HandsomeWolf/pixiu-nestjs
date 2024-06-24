// serialize.decorator.ts
import { UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from '../interceptors/serialize.interceptor';
import {
  ClassConstructor,
  SerializeOptions,
} from '@/common/interface/serialize.interface';

export function Serialize(dto: ClassConstructor, options?: SerializeOptions) {
  return UseInterceptors(new SerializeInterceptor(dto, options));
}
