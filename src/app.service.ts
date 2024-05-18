import { Injectable } from '@nestjs/common';
import { SystemMenus } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}
  getHello(): Promise<SystemMenus[]> {
    const res = this.prisma.systemMenus.findMany({});
    return res;
  }
}
