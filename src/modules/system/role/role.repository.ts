import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';

import { IPagination } from '@/common/interface/pagination.interface';
import { QueryRoleDto } from '@/modules/system/role/dto/request/query-role.dto';
import {
  CreateRoleDto,
  PermissionType,
} from '@/modules/system/role/dto/request/create-role.dto';
import { UpdateRoleDto } from '@/modules/system/role/dto/request/update-role.dto';

@Injectable()
export class RoleRepository {
  constructor(protected prisma: PrismaService) {}

  async findAll(pagination: IPagination, dto: QueryRoleDto) {
    const { skip, take, current, pageSize } = pagination;

    // 构建查询条件，仅当值存在时才添加到where子句中
    const where = {};
    if (dto.name) {
      where['name'] = {
        contains: dto.name,
      };
    }
    if (dto.status) {
      where['status'] = dto.status;
    }

    const [roles, total] = await Promise.all([
      this.prisma.role.findMany({
        where,
        skip,
        take,
      }),
      this.prisma.role.count({
        where,
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
    return this.prisma.role.findUnique({
      where: { id },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async existsByRoleName(name: string): Promise<boolean> {
    const count = await this.prisma.role.count({
      where: { name },
    });
    return count > 0;
  }

  async findRoleIdsByIds(roleIds: number[]) {
    return this.prisma.role.findMany({
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

  findPermissionIdsByRoleIds(roleIds: number[]) {
    return this.prisma.role.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      include: {
        permissions: {
          select: {
            permissionId: true,
          },
        },
      },
    });
  }

  findMenuIdsByRoleIds(roleIds: number[]) {
    return this.prisma.role.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      include: {
        menus: {
          select: {
            menuId: true,
          },
        },
      },
    });
  }

  findPermissionIdsWithMenuIdsByIds(roleIds: number[]) {
    return this.prisma.role.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      include: {
        permissions: {
          select: {
            permissionId: true,
          },
        },
        menus: {
          select: {
            menuId: true,
          },
        },
      },
    });
  }

  findPermissionsWithMenusByRoleIds(roleIds: number[]) {
    return this.prisma.role.findMany({
      where: {
        id: {
          in: roleIds,
        },
      },
      include: {
        permissions: {
          include: {
            permission: {
              select: {
                name: true,
              },
            },
          },
        },
        menus: {
          include: {
            menu: {
              select: {
                id: true,
                name: true,
                path: true,
                meta: true,
                children: {
                  select: {
                    id: true,
                    name: true,
                    path: true,
                    meta: true,
                    children: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.$transaction(async (prisma: PrismaService) => {
      const { permissions, policies, menus, ...roleData } = createRoleDto;

      const rolePermissions = {
        create: ((permissions as PermissionType[]) || []).map((permission) => ({
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
                  policy,
                },
              },
            },
          };
        }),
      };

      return prisma.role.create({
        data: {
          ...roleData,
          permissions: rolePermissions,
          policies: rolePolicies,
          menus: roleMenus,
        },
      });
    });
  }

  async findAllByIds(ids: number[]) {
    return this.prisma.role.findMany({
      where: {
        id: {
          in: ids,
        },
      },
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
        policies: {
          include: {
            policy: true,
          },
        },
      },
    });
  }

  async update(id: number, dto: UpdateRoleDto) {
    return this.prisma.$transaction(async (prisma: PrismaService) => {
      const { permissions, policies, menus, ...restData } = dto;

      const data: any = {};

      if (policies && policies.length > 0) {
        const createArr = [];
        for (const policy of policies) {
          let whereCond;
          let data = policy;
          if (policy.id) {
            whereCond = { id: policy.id };
            data = await this.prisma.policy.findUnique({
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

      return prisma.role.update({
        where: { id },
        data: {
          ...restData,
          ...data,
        },
        include: {
          permissions: {
            include: {
              permission: true,
            },
          },
          policies: {
            include: {
              policy: true,
            },
          },
          menus: {
            include: {
              menu: true,
            },
          },
        },
      });
    });
  }

  async delete(id: number) {
    return this.prisma.$transaction(async (prisma: PrismaService) => {
      // 删除Role相关的关联表的数据
      await prisma.role.update({
        where: { id },
        data: {
          permissions: {
            deleteMany: {},
          },
          policies: {
            deleteMany: {},
          },
          menus: {
            deleteMany: {},
          },
        },
      });
      // 删除Role
      return prisma.role.delete({ where: { id } });
    });
  }
}
