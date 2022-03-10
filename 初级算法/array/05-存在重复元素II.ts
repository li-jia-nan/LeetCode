export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  if (nums.length === new Set(nums).size) {
    return false;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) > 0 && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }
  return false;
};
