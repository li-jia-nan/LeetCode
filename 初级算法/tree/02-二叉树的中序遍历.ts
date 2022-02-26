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

export const inorderTraversal = (root: TreeNode | null): number[] => {
  const res = [];
  const rec = (n: TreeNode | null) => {
    if (!n) {
      return;
    }
    rec(n.left);
    res.push(n.val);
    rec(n.right);
  };
  rec(root);
  return res;
};
