export const minMoves = (nums: number[]): number => {
  const minNum = Math.min(...nums);
  return nums.reduce((p, e) => p + e - minNum, 0);
};
