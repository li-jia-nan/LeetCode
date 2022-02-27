export const removeElement = (nums: number[], val: number): number => {
  while (nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums.length;
};
