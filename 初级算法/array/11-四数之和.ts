export const fourSum = (nums: number[], target: number): number[][] => {
  const ans: number[][] = [];
  const len = nums.length;
  if (!nums || len < 4) {
    return ans;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          ans.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (nums[left] === nums[left - 1]) {
            left++;
          }
          while (nums[right] === nums[right + 1]) {
            right--;
          }
        }
        if (sum > target) {
          right--;
        }
        if (sum < target) {
          left++;
        }
      }
    }
  }
  return ans;
};
