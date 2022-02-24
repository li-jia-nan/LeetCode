export const sequentialSearch = <T extends string | number = string | number>(
  list: T[],
  item: T
): number => {
  const len = list.length;
  for (let i = 0; i < len; i++) {
    if (list[i] === item) {
      return i;
    }
  }
  return -1;
};
