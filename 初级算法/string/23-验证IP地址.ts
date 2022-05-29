const ipv4reg =
  /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])(\.([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])){3}$/;
const ipv6reg = /^[0-9a-fA-F]{1,4}(\:[0-9a-fA-F]{1,4}){7}$/;

export const validIPAddress = (queryIP: string): string => {
  if (ipv4reg.test(queryIP)) {
    return 'IPv4';
  }
  if (ipv6reg.test(queryIP)) {
    return 'IPv6';
  }
  return 'Neither';
};
