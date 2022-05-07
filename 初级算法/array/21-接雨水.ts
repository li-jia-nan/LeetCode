// 解法一：动态规划
export const trap1 = (height: number[]): number => {
  const len = height.length;
  if (len === 0) {
    return 0;
  }
  const leftMax: number[] = new Array(len).fill(0);
  const rightMax: number[] = new Array(len).fill(0);
  leftMax[0] = height[0];
  rightMax[len - 1] = height[len - 1];
  for (let i = 1; i < len; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  for (let i = len - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let ans = 0;
  for (let i = 0; i < len; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

// 解法二：双指针
export const trap2 = (height: number[]): number => {
  let ans = 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  while (left < right) {
    leftMax = Math.max(leftMax, height[left]);
    rightMax = Math.max(rightMax, height[right]);
    if (height[left] < height[right]) {
      ans += leftMax - height[left];
      ++left;
    } else {
      ans += rightMax - height[right];
      --right;
    }
  }
  return ans;
};
