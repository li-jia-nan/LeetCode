// Definition for node.
class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = val || 0;
    this.children = [];
  }
}

export const preorder = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (r: TreeNode | null): void => {
    if (!r) {
      return;
    }
    res.push(r.val);
    r.children.forEach(child => {
      dfs(child);
    });
  };
  dfs(root);
  return res;
};
