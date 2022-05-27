export const trailingZeroes = (n: number): number => {
  let count = 0;
  while (n > 0) {
    count += (n / 5) >>> 0;
    n = (n / 5) >>> 0;
  }
  return count;
};
