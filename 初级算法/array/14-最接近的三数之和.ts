export const threeSumClosest = (nums: number[], target: number): number => {
  const len = nums.length;
  let sums = 0;
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (i !== j && i !== k && j !== k) {
          sums = nums[i] + nums[j] + nums[k];
          if (Math.abs(sums - target) < Math.abs(res - target)) {
            res = sums;
          }
        }
      }
    }
  }
  return res;
};
