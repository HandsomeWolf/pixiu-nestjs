import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreatePolicyDto } from '@/modules/system/policy/dto/create-policy.dto';
import { UpdatePolicyDto } from '@/modules/system/policy/dto/update-policy.dto';

@Injectable()
export class PolicyService {
  constructor(private prismaService: PrismaService) {}
  create(createPolicyDto: CreatePolicyDto) {
    const encode = Buffer.from(JSON.stringify(createPolicyDto)).toString(
      'base64',
    );
    const data = { ...createPolicyDto, encode };
    return this.prismaService.systemPolicy.create({ data });
  }

  findAll(page: number = 1, limit: number = 10) {
    return this.prismaService.systemPolicy.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  findOne(policyId: number) {
    return this.prismaService.systemPolicy.findUnique({
      where: { id: policyId },
    });
  }

  update(id: number, updatePolicyDto: UpdatePolicyDto) {
    const encode = Buffer.from(JSON.stringify(updatePolicyDto)).toString(
      'base64',
    );
    const data = { ...updatePolicyDto, encode };
    return this.prismaService.systemPolicy.update({
      where: { id },
      data: data,
    });
  }

  remove(id: number) {
    return this.prismaService.systemPolicy.delete({ where: { id } });
  }
}
