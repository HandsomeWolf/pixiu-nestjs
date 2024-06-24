import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class PrismaExceptionFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const prismaErrorMessages = {
      P2000: '提供的数据不符合预期，请检查输入。',
      P2001: '无法找到指定的记录。',
      P2002: '已存在相同的记录，请尝试使用其他值。',
      P2003: '存在外键约束错误，请检查相关数据。',
      P2004: '违反了数据库约束条件。',
      P2005: '提供的数据类型不正确。',
      P2006: '查询语句无法解析，请检查查询语法。',
      P2007: '必填字段不能为空。',
      P2008: '无法连接到数据库，请检查数据库连接设置。',
      P2009: '数据库操作超时，请稍后再试。',
      P2010: '事务处理错误。',
      P2011: '提供的数据库凭证无效。',
      P2012: '数据大小超过字段限制。',
      P2013: '数据库空间不足。',
      P2014: '数据库操作被中断。',
      P2015: '数据库操作失败，违反了约束条件。',
      // 可以根据需要添加更多错误代码和消息
    };
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = HttpStatus.BAD_REQUEST;
    const code = exception.code;
    // TODO:线上版本改为：发生未知错误，请联系管理员。
    const message = prismaErrorMessages[code] || exception.message;
    // || '发生未知错误，请联系管理员。';
    // TODO：使用工具类统一
    response.status(status).json({
      statusCode: status,
      message,
    });
  }
}
