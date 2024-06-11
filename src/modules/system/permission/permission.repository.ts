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

  async findAll(pagination: IPagination) {
    const { skip, take, current, pageSize } = pagination;

    // 构建查询条件，仅当值存在时才添加到where子句中
    // const where = {};
    // if (dto.name) {
    //   where['name'] = {
    //     contains: dto.name,
    //   };
    // }
    // if (dto.status) {
    //   where['status'] = dto.status;
    // }

    const [roles, total] = await Promise.all([
      this.prisma.role.findMany({
        // where,
        skip,
        take,
      }),
      this.prisma.role.count({
        // where,
      }),
    ]);

    // 返回数据和分页信息
    return {
      data: roles,
      total,
      current,
      pageSize,
    };
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
