import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '@/core/database/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prismaService: PrismaService) {}
  async create(createRoleDto: CreateRoleDto) {
    return await this.prismaService.$transaction(
      async (prisma: PrismaService) => {
        const { permissions, policies, menus, ...restData } = createRoleDto;

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

        const roleMenus = {
          create: (menus || []).map((menu) => {
            const whereCond = menu?.id ? { id: menu.id } : { name: menu.name };
            return {
              menu: {
                connect: {
                  ...whereCond,
                },
              },
            };
          }),
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
            rolesMenus: roleMenus,
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
      const { permissions, policies, menus, ...restData } = updateRoleDto;

      const data: any = {};

      if (policies && policies.length > 0) {
        const createArr = [];
        for (const policy of policies) {
          let whereCond;
          let data = policy;
          if (policy.id) {
            whereCond = { id: policy.id };
            data = await this.prismaService.systemPolicy.findUnique({
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
        data.rolesPolicies = {
          deleteMany: {},
          create: createArr,
        };
      }

      // 判断一下是否有传rolePermissions
      if (permissions) {
        data.rolesPermissions = {
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

      if (menus) {
        data.rolesMenus = {
          deleteMany: {},
          create: (menus || []).map((menu) => {
            const whereCond = menu?.id ? { id: menu.id } : { name: menu.name };
            return {
              menu: {
                connect: {
                  ...whereCond,
                },
              },
            };
          }),
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
          rolesMenus: {
            include: {
              menu: true,
            },
          },
        },
      });
    });
  }

  remove(id: number) {
    return this.prismaService.$transaction(async (prisma: PrismaService) => {
      // 删除Role相关的关联表的数据
      await prisma.systemRole.update({
        where: { id },
        data: {
          rolesPermissions: {
            deleteMany: {},
          },
          rolesPolicies: {
            deleteMany: {},
          },
          rolesMenus: {
            deleteMany: {},
          },
        },
      });
      // 删除Role
      return prisma.systemRole.delete({ where: { id } });
    });
  }
}
