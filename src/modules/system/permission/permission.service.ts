import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from '@/modules/system/permission/dto/create-permission.dto';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { UpdatePermissionDto } from '@/modules/system/permission/dto/update-permission.dto';

@Injectable()
export class PermissionService {
  constructor(private prismaService: PrismaService) {}
  async create(createPermissionDto: CreatePermissionDto) {
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        const { policies, ...restData } = createPermissionDto;

        const permissionPolicy = {
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
        return prisma.systemPermission.create({
          data: {
            ...restData,
            permissionsPolicies: permissionPolicy,
          },
        });
      },
    );
  }

  findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prismaService.systemPermission.findMany({
      skip,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prismaService.systemPermission.findUnique({ where: { id } });
  }

  findByName(name: string) {
    return this.prismaService.systemPermission.findUnique({
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

  update(id: number, updatePermissionDto: UpdatePermissionDto) {
    return this.prismaService.$transaction(async (prisma: PrismaService) => {
      const { policies, ...restData } = updatePermissionDto;

      const updatePermission = await prisma.systemPermission.update({
        where: { id },
        data: {
          ...restData,
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
          permissionsPolicies: {
            include: {
              policy: true,
            },
          },
        },
      });

      return updatePermission;
    });
  }

  remove(id: number) {
    return this.prismaService.systemPermission.delete({ where: { id } });
  }
}
