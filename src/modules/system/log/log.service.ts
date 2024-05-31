import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { SystemLogs } from '@prisma/client';
import { QuerySystemLogDto } from '@/modules/system/log/dto/querySystemLog.dto';

@Injectable()
export class LogService {
  constructor(private prisma: PrismaService) {}

  findMany(dto: QuerySystemLogDto): Promise<[SystemLogs[], number]> {
    const skip = (dto.current - 1) * dto.pageSize;
    const take = dto.pageSize;
    return this.prisma.$transaction([
      this.prisma.systemLogs.findMany({
        skip,
        take,
        where: {
          api: {
            contains: dto.api,
          },
        },
      }),
      this.prisma.systemLogs.count(),
    ]);
  }
}
