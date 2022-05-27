export const removeOuterParentheses = (s: string): string => {
  let ans = '';
  let cnt = 0;
  for (const c of s) {
    if (c === ')') {
      cnt--;
    }
    if (cnt > 0) {
      ans += c;
    }
    if (c === '(') {
      cnt++;
    }
  }
  return ans;
};
