export const wordPattern = (pattern: string, s: string): boolean => {
  const arr = s.split(' ');
  if (pattern.length !== arr.length) {
    return false;
  }
  for (let i = 0; i < pattern.length; i++) {
    if (pattern.indexOf(pattern[i]) !== arr.indexOf(arr[i])) {
      return false;
    }
  }
  return true;
};
