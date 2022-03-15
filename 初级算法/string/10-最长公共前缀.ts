export const longestCommonPrefix = (strs: string[]): string => {
  if (strs.length === 0) {
    return '';
  }
  let ans = '';
  for (const ch of strs[0]) {
    if (!strs.every(str => str.startsWith(ans + ch))) {
      break;
    }
    ans += ch;
  }
  return ans;
};
