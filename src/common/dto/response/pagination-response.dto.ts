import { Expose } from 'class-transformer';

export abstract class PaginationResponseDto<T> {
  @Expose()
  success?: boolean;

  @Expose()
  abstract data: T[];

  @Expose()
  total: number;

  // @Expose()
  // totalPages: number;
}
