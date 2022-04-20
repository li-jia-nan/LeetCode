export const toGoatLatin = (sentence: string): string => {
  const targetArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const arr = sentence.split(' ');
  return arr
    .map((item, i) => {
      if (targetArr.includes(item[0])) {
        return item + 'ma' + 'a'.repeat(i + 1);
      } else {
        return item.substring(1) + item.substring(0, 1) + 'ma' + 'a'.repeat(i + 1);
      }
    })
    .join(' ');
};
