import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/core/database/prisma/prisma.service';
@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async findRoleById(roleId: number): Promise<any> {
    return this.prisma.systemRole.findUnique({
      where: { id: roleId },
    });
  }

  async updateRoles(
    roles: {
      id: number;
      permissions: any[];
    }[],
  ) {
    const roleIds = [];
    await Promise.all(
      roles.map(async (role) => {
        roleIds.push(role.id);
        const { permissions, ...restRole } = role;
        await this.prisma.systemRole.update({
          where: { id: role.id },
          data: {
            ...restRole,
            rolesPermissions: {
              deleteMany: {},
              create: (permissions || []).map((permission) => ({
                permission: {
                  connectOrCreate: {
                    where: {
                      name: permission.name,
                    },
                    create: permission,
                  },
                },
              })),
            },
          },
        });
      }),
    );
    return roleIds;
  }
}
