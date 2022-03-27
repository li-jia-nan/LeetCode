export const hasAlternatingBits = (n: number): boolean => {
  return !['00', '11'].some(item => n.toString(2).includes(item));
};
