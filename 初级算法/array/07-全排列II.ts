export const permuteUnique = (nums: number[]): number[][] => {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];
  const backtrack = (numsRemain: number[], temp: number[]): void => {
    if (numsRemain.length === 0) {
      res.push(temp);
      return;
    }
    numsRemain.forEach((n, i) => {
      if (n !== numsRemain[i - 1]) {
        backtrack([...numsRemain.slice(0, i), ...numsRemain.slice(i + 1)], [...temp, n]);
      }
    });
  };
  backtrack(nums, []);
  return res;
};
