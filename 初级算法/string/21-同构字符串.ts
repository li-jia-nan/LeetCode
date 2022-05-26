export const isIsomorphic = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }
  return [...s].every((_, i) => s.indexOf(s[i]) === t.indexOf(t[i]));
};
