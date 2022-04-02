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

export const findTarget = (root: TreeNode | null, k: number): boolean => {
  const res: number[] = [];
  const rec = (n: TreeNode | null) => {
    if (!n) {
      return;
    }
    rec(n.left);
    res.push(n.val);
    rec(n.right);
  };
  rec(root);
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[i] + res[j] === k && i !== j) {
        return true;
      }
    }
  }
  return false;
};
