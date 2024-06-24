import { ErrorShowType } from '@/core/enum/type.enum';

export interface ClassConstructor {
  new (...args: any[]): unknown;
}

export interface SerializeOptions {
  excludeExtraneousValues?: boolean;
  enableImplicitConversion?: boolean;
}

export interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}
