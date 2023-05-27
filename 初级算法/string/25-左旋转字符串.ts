const reverseLeftWords = (s: string, k: number): string => {
  const len = s.length;
  const n = k % len;
  const double = `${s}${s}`;
  return double.slice(n, n + len);
};

function reverseLeftWords2(s: string, n: number): string {
  return [...s].map((_, i) => s[(i + n) % s.length]).join('');
}
