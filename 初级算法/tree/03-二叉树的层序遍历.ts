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

export const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) {
    return [];
  }
  const res = [];
  const queue: [TreeNode | null, number][] = [[root, 0]];
  while (queue.length) {
    const [n, level] = queue.shift();
    if (!res[level]) {
      res[level] = [n.val];
    } else {
      res[level].push(n.val);
    }
    if (n.left) {
      queue.push([n.left, level + 1]);
    }
    if (n.right) {
      queue.push([n.right, level + 1]);
    }
  }
  return res;
};
