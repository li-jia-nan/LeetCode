export const lengthOfLastWord = (s: string): number => {
  return s
    .split(' ')
    .map(word => word.trim())
    .filter(Boolean)
    .pop().length;
};
