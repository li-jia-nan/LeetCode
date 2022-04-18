const countNumbersWithUniqueDigits = (n: number): number => {
  const ans = [];
  for (let i = 0; i < 10 ** n; i++) {
    ans.push(i);
  }
  return ans.filter(num => [...num.toString()].length === new Set([...num.toString()]).size).length;
};
