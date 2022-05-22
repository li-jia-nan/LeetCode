export const isPalindrome = (s: string): boolean => {
  const str = s.replace(/[\W|_]/g, '').toLowerCase();
  return str === [...str].reverse().join('');
};
