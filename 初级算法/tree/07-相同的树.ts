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

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (!p && !q) {
    return true;
  }
  if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
    return true;
  }
  return false;
};
