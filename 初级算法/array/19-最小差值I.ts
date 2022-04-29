export const smallestRangeI = (nums: number[], k: number): number => {
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  const a = max - k;
  const b = min + k;
  if (a < b) {
    return 0;
  }
  return a - b;
};
