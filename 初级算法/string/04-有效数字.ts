export const isNumber = (s: string): boolean => {
  return /^[-+]?(?:(\d+\.?)|(\.\d+)|(\d+\.\d+))([e|E][-+]?\d+)?$/gi.test(s);
};
