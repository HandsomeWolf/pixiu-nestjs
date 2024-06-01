import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreatePermissionDto } from '@/modules/system/permission/dto/create-permission.dto';

@Injectable()
export class PermissionRepository {
  constructor(private prisma: PrismaService) {}
  async create(data, permissionPolicy) {
    return this.prisma.systemPermission.create({
      data: {
        ...data,
        permissionPolicy,
      },
    });
  }

  async update(id: number, data, policies) {
    return this.prisma.systemPermission.update({
      where: { id },
      data: {
        ...data,
        permissionsPolicies: {
          deleteMany: {},
          create: (policies || []).map((policy) => {
            let whereCond;
            if (policy.id) {
              whereCond = { id: policy.id };
            } else {
              const encode = Buffer.from(JSON.stringify(policy)).toString(
                'base64',
              );
              whereCond = { encode };
              policy.encode = encode;
            }
            return {
              Policy: {
                connectOrCreate: {
                  where: whereCond,
                  create: {
                    ...policy,
                  },
                },
              },
            };
          }),
        },
      },
      include: {
        permissionsPolicies: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  findAll(skip: number, take: number) {
    return this.prisma.systemPermission.findMany({
      skip,
      take,
    });
  }
  findById(id: number) {
    return this.prisma.systemPermission.findUnique({
      where: {
        id,
      },
    });
  }

  findByName(name: string) {
    return this.prisma.systemPermission.findUnique({
      where: {
        name,
      },
      include: {
        permissionsPolicies: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  deleteById(id: number) {
    return this.prisma.systemPermission.delete({
      where: {
        id,
      },
    });
  }
}
