export const reverse = (x: number): number => {
  if (x < 0) {
    x = -x;
  }
  const res = +x.toString().split('').reverse().join('');
  if (res > 2 ** 31 - 1 || -res < -(2 ** 31)) {
    return 0;
  }
  return x < 0 ? -res : res;
};
