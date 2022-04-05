class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val || 0;
    this.children = [];
  }
}

export const preorder = (root: Node | null): number[] => {
  const res: number[] = [];
  const dfs = (r: Node | null): void => {
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
