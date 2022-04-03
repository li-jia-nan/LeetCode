export const nextGreatestLetter = (letters: string[], target: string): string => {
  return letters.find(item => item > target) || letters[0];
};
