export const isIsomorphic = (s: string, t: string): boolean => {
  return [...s].every((_, i) => s.indexOf(s[i]) === t.indexOf(t[i]));
};
