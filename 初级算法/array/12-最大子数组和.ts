export const maxSubArray = (nums: number[]): number => {
  let prevMaxSum = 0;
  let [maxSum] = nums;
  nums.forEach(num => {
    prevMaxSum = Math.max(prevMaxSum + num, num);
    maxSum = Math.max(prevMaxSum, maxSum);
  });
  return maxSum;
};
