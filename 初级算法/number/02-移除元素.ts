export const removeElement = (nums: number[], val: number): number => {
  let index = nums.indexOf(val);
  while (index !== -1) {
    nums.splice(index, 1);
    index = nums.indexOf(val);
  }
  return nums.length;
};
