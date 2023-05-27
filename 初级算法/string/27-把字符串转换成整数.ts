function strToInt(str: string): number {
  const MAX = 2 ** 31;
  const MIN = MAX * -1;
  return Math.min(Math.max(parseInt(str) || 0, MIN), MAX - 1);
}
