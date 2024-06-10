import { IsInt, Min } from 'class-validator';

// class OrderType {
//   [key: string]: 'asc' | 'desc';
// }

export class PaginationDto {
  @IsInt()
  @Min(1)
  current: number = 1;

  @IsInt()
  @Min(1)
  pageSize: number = 10;

  // @Type(() => OrderType)
  // @ValidateNested()
  // @isValidValueInArray(['asc', 'desc'])
  // @IsOptional()
  // order: OrderType;
  //
  // @Type(() => String)
  // @IsOptional()
  // sort: string;
}
