export const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map<number, number>();
  for (const i of nums) {
    if (!map.has(i)) {
      map.set(target - i, i);
    } else {
      return [i, map.get(i)];
    }
  }
};
