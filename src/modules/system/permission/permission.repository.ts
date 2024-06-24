import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '@/modules/system/permission/dto/required/create-permission.dto';
import { IPagination } from '@/common/interface/pagination.interface';
import { UpdatePermissionDto } from '@/modules/system/permission/dto/required/update-permission.dto';

@Injectable()
export class PermissionRepository {
  constructor(protected prisma: PrismaService) {}
  async create(dto: CreatePermissionDto) {
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      const { policies, ...permission } = dto;

      const policy = {
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
            policy: {
              connectOrCreate: {
                where: whereCond,
                create: {
                  ...policy,
                },
              },
            },
          };
        }),
      };
      return prisma.permission.create({
        data: {
          ...permission,
          policies: policy,
        },
      });
    });
  }

  async findAllWithPagination(pagination: IPagination) {
    const { skip, take } = pagination;
    return this.prisma.permission.findMany({
      skip,
      take,
    });
  }

  async countPermissions() {
    return this.prisma.permission.count();
  }

  async findAll() {
    return this.prisma.role.findMany();
  }

  async findOne(id: number) {
    return this.prisma.permission.findUnique({ where: { id } });
  }

  async findByName(name: string) {
    return this.prisma.permission.findUnique({
      where: {
        name,
      },
      include: {
        policies: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  async findNamesByIds(ids: number[]) {
    return this.prisma.permission.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      select: {
        name: true,
      },
    });
  }

  async update(id, dto: UpdatePermissionDto) {
    return this.prisma.$transaction(async (prisma: PrismaService) => {
      const { policies, ...restData } = dto;

      const updatePermission = await prisma.permission.update({
        where: { id },
        data: {
          ...restData,
          policies: {
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
                policy: {
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
          policies: {
            include: {
              policy: true,
            },
          },
        },
      });

      return updatePermission;
    });
  }

  async delete(id: number) {
    return this.prisma.permission.delete({ where: { id } });
  }
}
