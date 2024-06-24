import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { ErrorShowType } from '@/core/enum/type.enum';
import { HttpAdapterHost } from '@nestjs/core';
import { PRISMA_ERROR_MESSAGES } from '@/core/constants/prisma-errors.constants';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger();

  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const { httpAdapter } = this.httpAdapterHost;

    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;
    const code = exception.code;
    const errorInfo = {
      statusCode: code,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      message: PRISMA_ERROR_MESSAGES[code] || exception.message,
      stack: exception.stack,
    };
    const responseBody = {
      success: false,
      errorCode: status,
      errorMessage:
        PRISMA_ERROR_MESSAGES[code] || '发生未知错误，请联系管理员。',
      showType: ErrorShowType.ERROR_MESSAGE,
    };

    this.logger.error('[HttpExceptionFilter]', errorInfo);
    httpAdapter.reply(response, responseBody, status);
  }
}
