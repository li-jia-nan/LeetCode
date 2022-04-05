export const replaceSpaces = (S: string, length: number): string => {
  return S.slice(0, length).replace(/ /g, '%20');
};
