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

export const preorderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const stack: TreeNode[] = [];
  if (root) {
    stack.push(root);
  }
  while (stack.length) {
    const n = stack.pop();
    res.push(n.val);
    if (n.right) {
      stack.push(n.right);
    }
    if (n.left) {
      stack.push(n.left);
    }
  }
  return res;
};
