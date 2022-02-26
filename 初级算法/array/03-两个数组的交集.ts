export const intersection = (nums1: number[], nums2: number[]): number[] => {
  return [...new Set(nums1.filter(v => nums2.includes(v)))];
};
