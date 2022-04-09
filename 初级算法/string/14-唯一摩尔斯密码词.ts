enum CodeMap {
  a = '.-',
  b = '-...',
  c = '-.-.',
  d = '-..',
  e = '.',
  f = '..-.',
  g = '--.',
  h = '....',
  i = '..',
  j = '.---',
  k = '-.-',
  l = '.-..',
  m = '--',
  n = '-.',
  o = '---',
  p = '.--.',
  q = '--.-',
  r = '.-.',
  s = '...',
  t = '-',
  u = '..-',
  v = '...-',
  w = '.--',
  x = '-..-',
  y = '-.--',
  z = '--..',
}

export const uniqueMorseRepresentations = (words: string[]): number => {
  const { size = 0 } = new Set(
    words.map(word => {
      let str = '';
      [...word].forEach(i => void (str += CodeMap[i]));
      return str;
    })
  );
  return size;
};
