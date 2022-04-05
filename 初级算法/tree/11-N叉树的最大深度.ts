// Definition for node.
class TreeNode {
  val: number;
  children: TreeNode[];
  constructor(val?: number) {
    this.val = val || 0;
    this.children = [];
  }
}

export const maxDepth = (root: TreeNode | null): number => {
  let ans = 0;
  if (!root) {
    return ans;
  }
  root.children.forEach(child => {
    ans = Math.max(ans, maxDepth(child));
  });
  return ans + 1;
};
