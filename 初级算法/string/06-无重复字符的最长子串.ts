export const lengthOfLongestSubstring = (s: string): number => {
  let l = 0;
  let res = 0;
  const len = s.length;
  const map = new Map<string, number>();
  for (let i = 0; i < len; i++) {
    const letter = s[i];
    if (map.has(letter) && map.get(letter) >= l) {
      l = map.get(letter) + 1;
    }
    res = Math.max(res, i - l + 1);
    map.set(letter, i);
  }
  return res;
};
