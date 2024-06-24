// 引入NestJS和rxjs相关的模块
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import {
  ClassConstructor,
  SerializeOptions,
} from '@/common/interface/serialize.interface';

@Injectable()
export class SerializeInterceptor implements NestInterceptor {
  constructor(
    private dto: ClassConstructor,
    private options?: SerializeOptions,
  ) {}

  // intercept方法是NestInterceptor接口的一部分，必须被实现。它接收ExecutionContext和CallHandler作为参数。
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // 使用next.handle()获取到一个Observable，代表了处理请求的结果。
    return next.handle().pipe(
      // 转换之前
      tap((data) => {
        // 转换之前的数据打印
        console.log('Before transformation:', data);
      }),
      // 使用map操作符来转换Observable的结果。
      map((data) => {
        // plainToInstance方法将原始数据转换为DTO类的实例。
        return plainToInstance(this.dto, data, {
          // 为true时，dto文件中没有用@Expose声明的字段都不会返回
          excludeExtraneousValues:
            this.options?.excludeExtraneousValues ?? false,
          // 为true时，即以dto文件中字段类型为准，将数据转换为目标类型。
          enableImplicitConversion:
            this.options?.enableImplicitConversion ?? true,
        });
        // return { success: true, data: serializedData };
      }),
      // 转换之后
      tap((data) => {
        // 转换之后的数据打印
        console.log('After transformation:', data);
      }),
      catchError((error) => {
        return throwError(() => new InternalServerErrorException(error));
      }),
    );
  }
}
