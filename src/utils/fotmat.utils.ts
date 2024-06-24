export type FlatItem = {
  id: number | string;
  parentId?: number | string;
  [key: string]: any;
};

export type TreeItem = {
  id: number | string;
  children?: TreeItem[];
  [key: string]: any;
};

/**
 * 将扁平数据转换为树结构
 * @param flatData 扁平数据
 * @param keepEmptyChildren 是否保留空的 children 数组
 * @returns 树结构
 */
export function flatToTree(
  flatData: FlatItem[],
  keepEmptyChildren: boolean = false,
): TreeItem[] {
  const items = new Map<number | string, TreeItem>();

  // 初始化所有节点
  flatData.forEach((item) => items.set(item.id, { ...item, children: [] }));

  // 构建树结构
  const result = flatData.reduce<TreeItem[]>((acc, item) => {
    const currentItem = items.get(item.id)!;
    if (item.parentId !== undefined && items.has(item.parentId)) {
      const parentItem = items.get(item.parentId)!;
      if (!parentItem.children) {
        parentItem.children = [];
      }
      parentItem.children.push(currentItem);
    } else {
      acc.push(currentItem);
    }
    return acc;
  }, []);

  // 根据 keepEmptyChildren 参数决定是否移除空的 children 数组
  if (!keepEmptyChildren) {
    removeEmptyChildren(result);
  }

  return result;
}

/**
 * 移除空的 children 数组
 * @param nodes 节点数组
 */
function removeEmptyChildren(nodes: TreeItem[]) {
  nodes.forEach((node) => {
    if (node.children) {
      if (node.children.length === 0) {
        delete node.children;
      } else {
        removeEmptyChildren(node.children);
      }
    }
  });
}

/**
 * 将树结构转换为扁平数据
 * @param treeData 树结构
 * @param parentId 父节点 ID
 * @returns 扁平数据
 */
export function treeToFlat(
  treeData: TreeItem[],
  parentId?: number | string,
): FlatItem[] {
  let result: FlatItem[] = [];

  treeData.forEach((item) => {
    const { children, ...rest } = item;
    // 将当前节点加入结果数组
    result.push({ ...rest, parentId });

    // 递归处理子节点
    if (children && children.length) {
      result = result.concat(treeToFlat(children, item.id));
    }
  });

  return result;
}

export function toBoolean(value: unknown): boolean {
  if (typeof value === 'string') {
    const cleanedValue = value.toLowerCase().trim();
    return ['true', 'yes', '1'].includes(cleanedValue);
  } else if (typeof value === 'boolean') {
    return value;
  } else if (typeof value === 'number') {
    return value !== 0;
  }
  return false;
}

export function cleanData(obj: any): any {
  if (Array.isArray(obj)) {
    // 如果是数组，递归清理每个元素，然后过滤掉空数组和值为0的元素
    return obj
      .map(cleanData)
      .filter(
        (item) => item !== null && !(Array.isArray(item) && item.length === 0),
      );
  } else if (obj !== null && typeof obj === 'object') {
    // 特别处理日期类型，避免将日期转换成空对象
    if (obj instanceof Date) {
      return obj;
    }
    // 如果是对象，递归清理每个键值对
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => [key, cleanData(value)]) // 递归调用
        .filter(
          ([, value]) =>
            value !== null &&
            value !== 0 &&
            !(Array.isArray(value) && value.length === 0),
        ), // 过滤掉值为null、0或空数组的键值对
    );
  }
  // 对于基本类型和非null值，直接返回
  return obj;
}
