export const permute = (nums: number[]): number[][] => {
  const res: number[][] = [];
  const backtrack = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    nums.forEach(n => {
      if (path.includes(n)) {
        return;
      }
      backtrack([...path, n]);
    });
  };
  backtrack([]);
  return res;
};
