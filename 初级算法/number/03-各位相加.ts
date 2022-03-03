export const addDigits = (num: number): number => {
  if (num < 10) {
    return num;
  }
  return num % 9 || 9;
};
