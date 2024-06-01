import { Injectable } from '@nestjs/common';
import { QuerySystemLogDto } from '@/modules/system/log/dto/querySystemLog.dto';
import { SystemLog } from '@prisma/client';
import { PrismaService } from '@/core/database/prisma/prisma.service';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  findMany(dto: QuerySystemLogDto): Promise<[SystemLog[], number]> {
    const skip = (dto.current - 1) * dto.pageSize;
    const take = dto.pageSize;
    return this.prisma.$transaction([
      this.prisma.systemLog.findMany({
        skip,
        take,
        where: {
          api: {
            contains: dto.api,
          },
        },
      }),
      this.prisma.systemLog.count(),
    ]);
  }
}
