import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { CreateRoleDto } from '@/modules/system/role/dto/create-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/update-role.dto';

@Injectable()
export class RoleRepository {
  constructor(protected prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      const { permissions, policies, ...restData } = createRoleDto;

      const rolesPermissions = {
        create: (permissions || []).map((permission) => ({
          permission: {
            connectOrCreate: {
              where: {
                name: permission.name,
              },
              create: {
                ...permission,
              },
            },
          },
        })),
      };

      const rolesPolicies = {
        create: (policies || []).map((policy) => {
          let whereCond: { id?: any; encode?: string };
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

      return prisma.systemRole.create({
        data: {
          ...restData,
          rolesPermissions,
          rolesPolicies,
        },
      });
    });
  }

  async findAllByIds(ids: number[]) {
    return this.prisma.systemRole.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        rolesPermissions: {
          include: {
            permission: true,
          },
        },
        rolesPolicies: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  async existsByRoleName(name: string): Promise<boolean> {
    const count = await this.prisma.systemRole.count({
      where: { name },
    });
    return count > 0;
  }

  async update(id: number, dto: UpdateRoleDto) {
    return this.prisma.$transaction(async (prisma: PrismaService) => {
      const { permissions, policies, ...restData } = dto;

      const data: any = {};

      if (policies && policies.length > 0) {
        const createArr = [];
        for (const policy of policies) {
          let whereCond;
          let data = policy;
          if (policy.id) {
            whereCond = { id: policy.id };
            data = await prisma.systemPolicy.findUnique({
              where: { id: policy.id },
            });
          } else {
            const encode = Buffer.from(JSON.stringify(policy)).toString(
              'base64',
            );
            whereCond = { encode };
            policy.encode = encode;
          }
          createArr.push({
            policy: {
              connectOrCreate: {
                where: whereCond,
                create: {
                  ...data,
                },
              },
            },
          });
        }

        // role Policies更新
        data.RolePolicy = {
          deleteMany: {},
          create: createArr,
        };
      }

      // 判断一下是否有传rolePermissions
      if (permissions) {
        data.RolePolicy = {
          deleteMany: {},
          create: (permissions || []).map((permission) => ({
            permission: {
              connectOrCreate: {
                where: {
                  name: permission.name,
                },
                create: {
                  ...permission,
                },
              },
            },
          })),
        };
      }

      return prisma.systemRole.update({
        where: { id },
        data: {
          ...restData,
          ...data,
        },
        include: {
          rolesPermissions: {
            include: {
              permission: true,
            },
          },
          rolesPolicies: {
            include: {
              policy: true,
            },
          },
        },
      });
    });
  }

  // 批量查找已有的roleId
  async findAllByExistingRoles(roleIds: number[]) {
    return this.prisma.systemRole.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      select: {
        id: true,
      },
    });
  }
}
