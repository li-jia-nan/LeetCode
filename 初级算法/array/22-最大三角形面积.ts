const triangleArea = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => {
  return Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2) / 2;
};

export const largestTriangleArea = (points: number[][]): number => {
  const n = points.length;
  let ret = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = j; k < n; k++) {
        const [a0, a1] = points[i];
        const [b0, b1] = points[j];
        const [c0, c1] = points[k];
        ret = Math.max(ret, triangleArea(a0, a1, b0, b1, c0, c1));
      }
    }
  }
  return ret;
};
