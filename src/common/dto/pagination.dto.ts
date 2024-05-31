import { Type } from 'class-transformer';
import { IsNumber, ValidateNested } from 'class-validator';
import { isValidValueInArray } from '../decorators/isValidValueInArray.decorator';

class OrderType {
  [key: string]: 'asc' | 'desc';
}

export class PaginationDto {
  @IsNumber()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @Type(() => Number)
  size: number = 10;

  @Type(() => OrderType)
  @ValidateNested()
  @isValidValueInArray(['asc', 'desc'])
  order: OrderType;

  @Type(() => String)
  sort: string;
}
