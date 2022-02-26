// 二叉树节点的定义
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val || 0;
    this.left = left || null;
    this.right = right || null;
  }
}

export const minDepth = (root: TreeNode | null): number => {
  if (!root) {
    return 0;
  }
  let deep = Infinity;
  const dfs = (n: TreeNode | null, l: number) => {
    if (!n) {
      return;
    }
    if (!n.left && !n.right) {
      deep = Math.min(deep, l);
    }
    if (n.left) {
      dfs(n.left, l + 1);
    }
    if (n.right) {
      dfs(n.right, l + 1);
    }
  };
  dfs(root, 1);
  return deep;
};
