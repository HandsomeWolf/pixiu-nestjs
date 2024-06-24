import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { ErrorShowType } from '@/core/enum/type.enum';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger();

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: unknown, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorMessage: unknown =
      exception['response'] || exception['message'] || 'Internal Server Error';

    const clientIp = request.headers['x-forwarded-for'] || request.ip;

    const errorInfo = {
      headers: request.headers,
      query: request.query,
      body: request.body,
      params: request.params,
      timestamp: new Date().toISOString(),
      ip: clientIp,
      exception: exception['name'],
      error: errorMessage,
    };

    const responseBody = {
      success: false,
      errorCode: httpStatus,
      errorMessage:
        exception instanceof HttpException
          ? exception.getResponse()
          : 'Internal server error',
      showType: ErrorShowType.ERROR_MESSAGE,
    };

    this.logger.error('[AllExceptionFilter]', errorInfo);
    httpAdapter.reply(response, responseBody, httpStatus);
  }
}
