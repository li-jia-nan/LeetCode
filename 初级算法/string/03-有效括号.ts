// map解法
export const isValid = (s: string): boolean => {
  if (s.length & 1) {
    return false;
  }
  const stack: string[] = [];
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
      if (map.get(t) == c) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// 栈解法
export const isValid2 = (s: string): boolean => {
  if (s.length & 1) {
    return false;
  }
  const stack: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (['(', '[', '{'].includes(c)) {
      stack.push(c);
    } else {
      const t = stack.at(-1);
      if ((t === '(' && c === ')') || (t === '[' && c === ']') || (t === '{' && c === '}')) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
