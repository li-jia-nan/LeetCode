export const quickSort = (arr: number[]): number[] => {
  const rec = (arr: number[]): number[] => {
    if (arr.length === 1) {
      return arr;
    }
    const left: number[] = [];
    const right: number[] = [];
    const mid: number = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  rec(arr).forEach((n, i) => {
    arr[i] = n;
  });
  return arr;
};
