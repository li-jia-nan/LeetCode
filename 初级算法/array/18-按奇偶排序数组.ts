export const sortArrayByParity = (nums: number[]): number[] => {
  return nums.sort(a => (a & 1 ? 1 : -1));
};
