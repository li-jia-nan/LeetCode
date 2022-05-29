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

export const sumRootToLeaf = (root: TreeNode | null): number => {
  const dfs = (r: TreeNode | null, s: number = 0): number => {
    if (r) {
      s = s * 2 + r.val;
      if (!r.left && !r.right) {
        return s;
      }
      return dfs(r.left, s) + dfs(r.right, s);
    }
    return 0;
  };
  return dfs(root);
};
