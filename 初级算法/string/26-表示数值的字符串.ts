function isNumber(s: string): boolean {
  return /^(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?$/.test(s.trim());
}

function isNumber2(s: string): boolean {
  s = s.trim();
  if (s.length === 0) {
    return false;
  }
  return !Number.isNaN(Number(s));
}
