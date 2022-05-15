export const maxProfit = (prices: number[]): number => {
  let min: number = prices[0];
  let max: number = prices[0];
  let dif: number = max - min;
  let res: number = dif;
  prices.forEach(item => {
    if (item < min) {
      min = item;
      max = item;
    }
    if (item > max) {
      max = item;
    }
    dif = max - min;
    res = Math.max(res, dif);
  });
  return res;
};
