export const repeatedNTimes = (nums: number[]): number => {
  const found = new Set<number>();
  for (const num of nums) {
    if (found.has(num)) {
      return num;
    }
    found.add(num);
  }
  return -1;
};
