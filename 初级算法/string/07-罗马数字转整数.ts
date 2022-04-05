enum Num {
  I = 1,
  V = 5,
  X = 10,
  L = 50,
  C = 100,
  D = 500,
  M = 1000,
  IV = 4,
  IX = 9,
  XL = 40,
  XC = 90,
  CD = 400,
  CM = 900,
}

export const romanToInt = (s: string): number => {
  if (Num[s]) {
    return Num[s];
  }
  let sum = 0;
  let pre = 0;
  [...s].forEach(item => {
    if (Num[item] > pre) {
      sum = sum + Num[item] - 2 * pre;
    } else {
      sum = sum + Num[item];
    }
    pre = Num[item];
  });
  return sum;
};
