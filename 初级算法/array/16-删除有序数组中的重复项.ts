export const removeDuplicates = (nums: number[]): number => {
  let i = 0;
  for (const n of new Set<number>(nums)) {
    nums[i++] = n;
  }
  nums.splice(i);
  return nums.length;
};
