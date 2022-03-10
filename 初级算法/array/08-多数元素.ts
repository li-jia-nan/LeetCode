export const majorityElement = (nums: number[]): number => {
  const result = nums.reduce((acc, cur) => {
    if (cur in acc) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});
  const max = Math.max(...(Object.values(result) as number[]));
  return parseFloat(Object.keys(result).find(key => result[key] === max));
};
