import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
@Injectable()
export class SharedService {
  constructor(private prismaService: PrismaService) {}

  getSubject(subject: string, user: any, args?: any) {
    return this.prismaService[subject].findUnique({
      where: { id: user.id },
      ...(args || {}),
    });
  }
}
