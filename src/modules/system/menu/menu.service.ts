import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from '@/modules/system/menu/dto/request/create-menu.dto';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { UpdateMenuDto } from '@/modules/system/menu/dto/request/update-menu.dto';
import { Menu } from '@prisma/client';

@Injectable()
export class MenuService {
  constructor(private prismaService: PrismaService) {}

  async createNested(
    dto: CreateMenuDto,
    prismaService: PrismaService,
    parentId?: number,
  ) {
    const { meta, children, ...restData } = dto;
    const parent = await prismaService.menu.create({
      data: {
        parentId,
        ...restData,
        meta: {
          create: meta,
        },
      },
    });

    if (children && children.length) {
      // TODO find->include
      parent['children'] = await Promise.all(
        children.map((child) =>
          this.createNested(child, prismaService, parent.id),
        ),
      );
    }

    return parent;
  }
  async create(createMenuDto: CreateMenuDto) {
    const data = await this.createNested(createMenuDto, this.prismaService);
    // tenantId -> menu -> 前端Menu不多 -> 一次性查询所有的menu
    return this.prismaService.menu.findUnique({
      where: {
        id: data.id,
      },
      include: {
        meta: true,
        children: {
          include: {
            meta: true,
            children: true,
          },
        },
      },
    });
  }

  async findAll(where?: { status: number }): Promise<Menu[]> {
    return this.prismaService.menu.findMany({
      where: {
        parentId: null, // 仅选择顶层菜单项
        ...where,
      },
      include: {
        meta: true,
        children: {
          include: {
            meta: true,
            children: true,
          },
        },
      },
    });
  }

  async findAllByIds(ids: number[], where?: { status: number }) {
    // 定义一个递归函数来构建查询结构，确保每一层都至少选择一个字段
    const buildSelectObject = (depth: number = 0) => {
      // 基础选择对象，确保每一层都至少有基础字段
      let baseSelect: any = {
        // 使用any类型来避免类型检查错误
        id: true,
        name: true,
        path: true,
        parentId: true,
        component: true,
        meta: {
          select: {
            icon: true,
            noClosable: true,
            hidden: true,
            activeMenu: true,
            dot: true,
            badge: true,
            isFrame: true,
            isCache: true,
          },
        },
      };

      // 如果没有达到最大深度，添加children字段
      if (depth < 10) {
        baseSelect = {
          ...baseSelect,
          children: {
            select: {
              ...buildSelectObject(depth + 1), // 递归调用以构建下一层的结构
            },
          },
        };
      }

      return baseSelect;
    };

    const menus = await this.prismaService.menu.findMany({
      where: {
        parentId: null, // 仅选择顶层菜单项
        id: {
          in: ids,
        },
        ...where,
      },
      select: buildSelectObject(), // 使用递归函数构建的查询结构
    });

    // return menus.map((menu) => cleanData(menu));
    return menus;
  }

  findOne(id: number) {
    return this.prismaService.menu.findUnique({
      where: {
        id: id,
      },
      include: {
        meta: true,
        children: {
          include: {
            meta: true,
            children: true,
          },
        },
      },
    });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    // menu -> children
    const { children, meta, ...restData } = updateMenuDto;
    return this.prismaService.$transaction(async (prisma: PrismaService) => {
      await prisma.menu.update({
        where: {
          id: id,
        },
        data: {
          ...restData,
          meta: {
            update: meta,
          },
        },
      });

      // 判断是否传入的数据有children
      if (children && children.length > 0) {
        // 可能有新增，可能有删除
        const menuIds = (await this.collectMenuIds(id)).filter((o) => o !== id);

        await prisma.menuMeta.deleteMany({
          where: {
            menuId: {
              in: menuIds,
            },
          },
        });

        await prisma.menu.deleteMany({
          where: {
            id: {
              in: menuIds,
            },
          },
        });
        await Promise.all(
          children.map((child) => {
            return this.createNested(child, prisma, id);
          }),
        );
      }

      return prisma.menu.findUnique({
        where: {
          id: id,
        },
        include: {
          meta: true,
          children: {
            include: {
              meta: true,
              children: true,
            },
          },
        },
      });
    });
  }

  async collectMenuIds(id) {
    const idsToDelete = [];
    idsToDelete.push(id);
    const menu = await this.prismaService.menu.findUnique({
      where: {
        id: id,
      },
      include: {
        children: true,
      },
    });

    if (menu.children) {
      const childMenuIds = await Promise.all(
        menu.children.map((child) => this.collectMenuIds(child.id)),
      );

      for (const childIds of childMenuIds) {
        idsToDelete.push(...childIds);
      }
    }

    return idsToDelete;
  }

  async remove(id: number) {
    const idsToDelete = await this.collectMenuIds(id);

    return this.prismaService.$transaction(async (prisma: PrismaService) => {
      // 删除关联表Meta数据
      await prisma.menuMeta.deleteMany({
        where: {
          menuId: {
            in: idsToDelete,
          },
        },
      });
      // 删除Menu中的children数据
      return prisma.menu.deleteMany({
        where: {
          id: {
            in: idsToDelete,
          },
        },
      });
    });
  }
}
