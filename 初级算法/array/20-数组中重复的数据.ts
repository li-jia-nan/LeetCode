export const findDuplicates = (nums: number[]): number[] => {
  const set = new Set<number>();
  const ans: number[] = [];
  nums.forEach(item => {
    if (set.size === set.add(item).size) {
      ans.push(item);
    }
  });
  return ans;
};
