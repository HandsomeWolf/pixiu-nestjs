import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ErrorShowType } from '@/core/enum/type.enum';
import { HttpAdapterHost } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger();
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const httpStatus = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorInfo = {
      statusCode: httpStatus,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: exception.message || 'Internal server error',
      stack: exception.stack,
    };
    // TODO：使用工具类统一
    const responseBody = {
      success: false,
      errorCode: httpStatus,
      errorMessage: exception.message || 'Internal server error',
      showType: ErrorShowType.ERROR_MESSAGE,
      data: null,
    };
    this.logger.error('[HttpExceptionFilter]', errorInfo);
    console.log(response, responseBody, httpStatus);
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
