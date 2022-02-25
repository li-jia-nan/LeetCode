// 解法一
export const singleNumber = (nums: number[]): number => {
  return nums.reduce((pre, next) => (pre ^= next), 0);
};

// 解法二
export const singleNumber2 = (nums: number[]): number => {
  return nums.find(n => nums.indexOf(n) === nums.lastIndexOf(n));
};

// 解法三
export const singleNumber3 = (nums: number[]): number => {
  const set = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
  }
  return [...set][0];
};
