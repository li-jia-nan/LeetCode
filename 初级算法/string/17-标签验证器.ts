export const isValid = (code: string): boolean => {
  const tagReg1 = /<!\[CDATA\[.*?\]\]>/;
  const tagReg2 = /<([A-Z]{1,9})>([^<]*)<\/(\1)>/;
  while (tagReg1.test(code)) {
    code = code.replace(tagReg1, '$TMP$');
  }
  while (tagReg2.test(code)) {
    code = code.replace(tagReg2, '$VALID$');
  }
  return code === '$VALID$';
};
