const compareVersion = (version1: string, version2: string) => {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const maxLen = Math.max(v1.length, v2.length);
  for (let i = 0; i < maxLen; ++i) {
    let x = 0;
    let y = 0;
    if (i < v1.length) {
      x = Number(v1[i]);
    }
    if (i < v2.length) {
      y = Number(v2[i]);
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
      return -1;
    }
  }
  return 0;
};

export default compareVersion;
