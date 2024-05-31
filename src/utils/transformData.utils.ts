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
