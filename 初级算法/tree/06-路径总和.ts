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

export const hasPathSum = (root: TreeNode | null, targetSum: number): boolean => {
  if (!root) {
    return false;
  }
  let res = false;
  const dfs = (n: TreeNode | null, s: number) => {
    if (!n.left && !n.right && s === targetSum) {
      res = true;
    }
    if (n.left) {
      dfs(n.left, s + n.left.val);
    }
    if (n.right) {
      dfs(n.right, s + n.right.val);
    }
  };
  dfs(root, root.val);
  return res;
};
