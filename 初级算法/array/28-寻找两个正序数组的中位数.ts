export const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const len = arr.length;
  if (len === 0) {
    return 0;
  }
  if (len % 2 === 0) {
    return (arr[len / 2 - 1] + arr[len / 2]) / 2;
  } else {
    return arr[(len / 2) >>> 0];
  }
};
