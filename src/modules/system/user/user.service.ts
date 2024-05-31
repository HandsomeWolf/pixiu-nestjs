import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  @Get()
  findAll() {
    return [
      {
        bookName: '认知觉醒',
      },
    ];
  }

  @Post()
  create() {
    return 'This action adds a new user';
  }
  @Put()
  update() {
    return 'This action updates a new user';
  }

  @Delete()
  remove() {
    return 'This action removes a new user';
  }
}
