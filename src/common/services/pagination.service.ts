import { Injectable } from '@nestjs/common';
import { IPagination } from '@/common/interface/pagination.interface';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { PaginationResponseDto } from '@/common/dto/response/pagination-response.dto';

@Injectable()
export class PaginationService {
  constructor(private prisma: PrismaService) {}

  async paginate<T, WhereInput, OrderByInput, IncludeOrSelect>({
    model,
    paginationOptions,
    where,
    orderBy,
    includeOrSelect,
  }: {
    model: string; // Prisma模型
    paginationOptions: IPagination;
    where?: WhereInput; // 根据实际模型调整
    orderBy?: OrderByInput; // 根据实际模型调整
    includeOrSelect?: IncludeOrSelect; // 新增参数以支持关联查询
  }): Promise<PaginationResponseDto<T>> {
    const { current, pageSize } = paginationOptions;
    const skip = (current - 1) * pageSize;
    const take = pageSize;

    const [data, total] = await this.prisma.$transaction([
      this.prisma[model].findMany({
        where,
        orderBy,
        skip,
        take,
        ...includeOrSelect, // 使用展开运算符应用关联查询参数
      }),
      this.prisma[model].count({ where }),
    ]);

    // const totalPages = Math.ceil(totalCount / pageSize);

    return {
      data,
      total,
      // totalPages,
    };
  }
}
