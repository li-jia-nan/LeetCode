const bitCount = (n: number): number => {
  return n.toString(2).match(/1/g).length;
};

export const countPrimeSetBits = (left: number, right: number): number => {
  let res = 0;
  for (let i = left; i <= right; i++) {
    if ([2, 3, 5, 7, 11, 13, 17, 19].includes(bitCount(i))) {
      res++;
    }
  }
  return res;
};
