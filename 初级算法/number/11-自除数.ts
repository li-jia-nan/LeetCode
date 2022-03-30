export const selfDividingNumbers = (left: number, right: number): number[] => {
  const ans = [];
  while (left <= right) {
    const numberArr = [...left.toString()];
    if (!numberArr.includes('0') && numberArr.every(num => left % Number(num) === 0)) {
      ans.push(left);
    }
    left++;
  }
  return ans;
};
