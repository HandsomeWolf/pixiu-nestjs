import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IPagination } from '@/common/interface/pagination.interface';

export const Pagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IPagination => {
    const request = ctx.switchToHttp().getRequest();
    const current = parseInt(request.query.current, 10) || 1;
    const pageSize = parseInt(request.query.pageSize, 10) || 10;
    const skip = (current - 1) * pageSize;
    return { skip, take: pageSize, current, pageSize };
  },
);
