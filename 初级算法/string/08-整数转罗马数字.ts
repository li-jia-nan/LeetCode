export const intToRoman = (num: number): string => {
  const 个位 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const 十位 = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const 百位 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const 千位 = ['', 'M', 'MM', 'MMM'];
  return (
    千位[(num / 1000) >>> 0] +
    百位[((num % 1000) / 100) >>> 0] +
    十位[((num % 100) / 10) >>> 0] +
    个位[num % 10]
  );
};
