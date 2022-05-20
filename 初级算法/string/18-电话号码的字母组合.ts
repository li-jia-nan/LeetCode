enum KEYMAP {
  abc = 2,
  def = 3,
  ghi = 4,
  jkl = 5,
  mno = 6,
  pqrs = 7,
  tuv = 8,
  wxyz = 9,
}

export const letterCombinations = (digits: string): string[] => {
  const res: string[] = [];
  if (!digits) {
    return res;
  }
  const loop = (str: string, index: number): void => {
    if (index === digits.length) {
      res.push(str);
      return;
    }
    for (const char of KEYMAP[digits[index]]) {
      loop(str + char, index + 1);
    }
  };
  loop('', 0);
  return res;
};
