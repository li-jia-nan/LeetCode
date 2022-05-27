export const binarySearch = <T extends number = number>(list: T[], item: T): number => {
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = ((low + high) / 2) >>> 0;
    const element = list[mid];
    if (element < item) {
      low = mid + 1;
    }
    if (element > item) {
      high = mid - 1;
    }
    if (element === item) {
      return mid;
    }
  }
  return -1;
};
