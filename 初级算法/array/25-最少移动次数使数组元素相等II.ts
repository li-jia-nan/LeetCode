export const minMoves2 = (nums: number[]): number => {
  if (nums.length === 0) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  const mid = (nums.length / 2) >>> 0;
  let ans = 0;
  nums.forEach(item => {
    ans += Math.abs(item - nums[mid]);
  });
  return ans;
};
