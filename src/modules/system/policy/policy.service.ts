import { Injectable } from '@nestjs/common';
import { CreatePolicyDto } from './dto/create-policy.dto';
import { UpdatePolicyDto } from './dto/update-policy.dto';
import { PrismaService } from '@/core/database/prisma/prisma.service';

@Injectable()
export class PolicyService {
  constructor(private prismaService: PrismaService) {}
  create(createPolicyDto: CreatePolicyDto) {
    const encode = Buffer.from(JSON.stringify(createPolicyDto)).toString(
      'base64',
    );
    const data = { ...createPolicyDto, encode };
    return this.prismaService.policy.create({ data });
  }

  findAll(page: number = 1, limit: number = 10) {
    return this.prismaService.policy.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(policyId: number) {
    return this.prismaService.policy.findUnique({
      where: { id: policyId },
    });
  }

  update(id: number, updatePolicyDto: UpdatePolicyDto) {
    const encode = Buffer.from(JSON.stringify(updatePolicyDto)).toString(
      'base64',
    );
    const data = { ...updatePolicyDto, encode };
    return this.prismaService.policy.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prismaService.policy.delete({ where: { id } });
  }
}
