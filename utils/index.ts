//字符串转base64
export const encode = (str: string): string => {
  return btoa(encodeURI(str));
};

// base64转字符串
export const decode = (str: string): string => {
  return decodeURI(atob(str));
};
