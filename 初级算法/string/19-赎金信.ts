export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  const m = new Map<string, number>();
  for (const i of magazine) {
    if (m.has(i)) {
      m.set(i, m.get(i) + 1);
    } else {
      m.set(i, 1);
    }
  }
  for (const i of ransomNote) {
    if (!m.has(i)) {
      return false;
    }
    if (m.get(i) <= 0) {
      return false;
    }
    m.set(i, m.get(i) - 1);
  }
  return true;
};
