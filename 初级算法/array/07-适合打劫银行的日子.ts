export const goodDaysToRobBank = (security: number[], time: number): number[] => {
  const left = [0];
  const right = [];
  for (let i = 1; i < security.length; i++) {
    if (security[i] <= security[i - 1]) {
      left[i] = left[i - 1] + 1;
    } else {
      left[i] = 0;
    }
  }
  right[security.length - 1] = 0;
  for (let i = security.length - 2; i >= 0; i--) {
    if (security[i] <= security[i + 1]) {
      right[i] = right[i + 1] + 1;
    } else {
      right[i] = 0;
    }
  }
  let res = [];
  for (let i = 0; i < security.length; i++) {
    if (left[i] >= time && right[i] >= time) {
      res.push(i);
    }
  }
  return res;
};
