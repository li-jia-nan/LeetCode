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

const preorderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (r: TreeNode | null): void => {
    if (!r) {
      return;
    }
    res.push(r.val);
    dfs(r.left);
    dfs(r.right);
  };
  dfs(root);
  return res;
};

export const getAllElements = (root1: TreeNode | null, root2: TreeNode | null): number[] => {
  return [...preorderTraversal(root1), ...preorderTraversal(root2)].sort((a, b) => a - b);
};
