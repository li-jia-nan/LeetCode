const shortestPath = (grid: number[][], k: number): number => {
  const m = grid.length;
  const n = grid[0].length;
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];
  const q: number[][] = [];
  const vis = new Array(m)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(k + 1).fill(0)));
  q.push([0, 0, 0]);
  let step = 0;
  while (q.length) {
    let size = q.length;
    while (size > 0) {
      size--;
      const [x, y, barrier] = q.shift();
      if (barrier > k) {
        continue;
      }
      if (x === m - 1 && y === n - 1) {
        return step;
      }
      if (vis[x][y][barrier]) {
        continue;
      }
      vis[x][y][barrier] = 1;
      for (const [sx, sy] of dirs) {
        const nx = x + sx;
        const ny = y + sy;
        if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
          continue;
        }
        q.push([nx, ny, barrier + grid[nx][ny]]);
      }
    }
    step += 1;
  }
  return -1;
};

export default shortestPath;
