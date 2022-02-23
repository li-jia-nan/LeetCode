// 异或
export const singleNumber = (nums: number[]): number => {
  return nums.reduce((pre, next) => (pre ^= next), 0);
};
