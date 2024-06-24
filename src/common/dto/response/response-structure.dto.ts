import { Expose } from 'class-transformer';

export abstract class ResponseStructureDto {
  @Expose()
  success: boolean;

  @Expose()
  abstract data?: any;

  @Expose()
  errorCode?: number;

  @Expose()
  errorMessage?: string;

  @Expose()
  showType?: number;
}
