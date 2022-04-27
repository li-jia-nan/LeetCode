export const sortArrayByParity = (nums: number[]): number[] => {
  const [a, b] = [[], []];
  nums.forEach(n => {
    ((n & 1) === 0 ? a : b).push(n);
  });
  return [...a, ...b];
};
