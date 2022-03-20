// Definition for node.
class Node {
  val: number;
  children: Node[];
  constructor(val?: number) {
    this.val = val || 0;
    this.children = [];
  }
}

export const postorder = (root: Node | null): number[] => {
  const res: number[] = [];
  const dfs = (r: Node | null) => {
    if (!r) {
      return r;
    }
    r.children.forEach(child => {
      dfs(child);
    });
    res.push(r.val);
  };
  dfs(root);
  return res;
};
