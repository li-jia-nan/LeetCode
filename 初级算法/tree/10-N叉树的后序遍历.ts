// Definition for node.
class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = val || 0;
    this.children = [];
  }
}

export const postorder = (root: TreeNode | null): number[] => {
  const res: number[] = [];
  const dfs = (r: TreeNode | null): void => {
    if (!r) {
      return;
    }
    r.children.forEach(child => {
      dfs(child);
    });
    res.push(r.val);
  };
  dfs(root);
  return res;
};
