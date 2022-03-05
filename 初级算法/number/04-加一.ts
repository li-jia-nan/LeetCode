export const plusOne = (digits: number[]): number[] => {
  return [...(BigInt(digits.join('')) + BigInt(1)).toString()].map(Number);
};

const list = [1, 1, 1, 1, 1, 1];

const flag1 = list.every((n, i) => (i === list.length - 1 ? n : list[i + 1] <= n));

const flag2 = list.every((n, i) => (i === list.length - 1 ? n : list[i + 1] >= n));

if (flag1) {
  console.log('单调递减数组');
}

if (flag2) {
  console.log('单调递增数组');
}

if (!flag1 && !flag2) {
  console.log('不是递增也不是递减');
}
