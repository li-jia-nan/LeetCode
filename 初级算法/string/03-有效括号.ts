export const isValid = (s: string): boolean => {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const map = new Map<string, string>();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (map.has(c)) {
      stack.push(c);
    } else {
      const t = stack[stack.length - 1];
      if (map.get(t) === c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
