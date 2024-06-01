import { Injectable } from '@nestjs/common';
import { CreateSystemMenuDto } from '@/modules/system/menu/dto/createSystemMenu.dto';
import { UpdateSystemMenuDto } from '@/modules/system/menu/dto/updateSystemMenu.dto';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { flatToTree, TreeItem } from '@/utils/fotmat.utils';

@Injectable()
export class MenuService {
  constructor(private prisma: PrismaService) {}
  async find(): Promise<TreeItem[]> {
    const menus = await this.prisma.systemMenu.findMany();
    return flatToTree(
      menus.map((menu) => ({
        ...menu,
        guard: menu.guard ? menu.guard.split(', ') : [], // 将字符串转换回数组
      })),
    );
  }
  async create(dto: CreateSystemMenuDto) {
    await this.validateParentIdAndType(dto.parentId, dto.type);

    // 创建菜单项
    const guardAsString = dto.guard?.join(', ');
    return this.prisma.systemMenu.create({
      data: {
        ...dto,
        guard: guardAsString,
      },
    });
  }

  async update(dto: UpdateSystemMenuDto) {
    await this.validateParentIdAndType(dto.parentId, dto.type);

    // 如果guard字段存在，则将数组转换为字符串
    const guardAsString = dto.guard?.join(', ');

    // 执行更新操作
    return this.prisma.systemMenu.update({
      where: { id: dto.id },
      data: {
        ...dto,
        guard: guardAsString,
      },
    });
  }

  delete(id: number) {
    return this.prisma.systemMenu.delete({ where: { id } });
  }

  private async validateParentIdAndType(parentId: number, type: number) {
    let parentMenu = null;
    if (parentId !== 0) {
      parentMenu = await this.prisma.systemMenu.findUnique({
        where: { id: parentId },
      });

      if (!parentMenu) {
        throw new Error('父级菜单不存在');
      }
    }

    if (type === 2 && parentMenu && parentMenu.type !== 1) {
      throw new Error('菜单只能放在目录下');
    }
    if (type === 1 && parentMenu && parentMenu.type !== 1) {
      throw new Error('目录只能放在目录下');
    }
    if (
      type === 3 &&
      (parentId === 0 || (parentMenu && parentMenu.type !== 2))
    ) {
      throw new Error('按钮必须放在菜单下');
    }
  }
}
