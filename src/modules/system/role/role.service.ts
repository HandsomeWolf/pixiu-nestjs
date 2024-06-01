import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { UpdateRoleDto } from '@/modules/system/role/dto/update-role.dto';
import { CreateRoleDto } from '@/modules/system/role/dto/create-role.dto';

@Injectable()
export class RoleService {
  constructor(private prismaService: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        const { permissions, policies, ...restData } = createRoleDto;

        const rolePermissions = {
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

        const rolePolicies = {
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

        return prisma.systemRole.create({
          data: {
            ...restData,
            rolesPermissions: rolePermissions,
            rolesPolicies: rolePolicies,
          },
        });
      },
    );
  }

  findAll(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;
    return this.prismaService.systemRole.findMany({
      skip,
      take: limit,
    });
  }

  findOne(id: number) {
    return this.prismaService.systemRole.findUnique({
      where: { id },
      include: {
        rolesPermissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  findAllByIds(ids: number[]) {
    return this.prismaService.systemRole.findMany({
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

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.prismaService.$transaction(async (prisma: PrismaService) => {
      const { permissions, policies, ...restData } = updateRoleDto;

      const data: any = {};

      if (policies && policies.length > 0) {
        const createArr = [];
        for (const policy of policies) {
          let whereCond;
          let data = policy;
          if (policy.id) {
            whereCond = { id: policy.id };
            const policyData = await this.prismaService.systemPolicy.findUnique(
              {
                where: { id: policy.id },
              },
            );
            data = policyData;
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
        const rolePolicies = {
          deleteMany: {},
          create: createArr,
        };

        data.RolePolicy = rolePolicies;
      }

      // 判断一下是否有传rolePermissions
      if (permissions) {
        const rolePermissions = {
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
        data.RolePolicy = rolePermissions;
      }

      const updateRole = await prisma.systemRole.update({
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

      return updateRole;
    });
  }

  remove(id: number) {
    return this.prismaService.systemRole.delete({ where: { id } });
  }
}
