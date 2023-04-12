export const clone = (data) => {
  return JSON.parse(JSON.stringify(data));
};

export const shortenString = (string) => {
  if (string.length < 16) {
    return string;
  }
  return string.substring(0, 13) + "...";
};

const commonMethods = {
  clone,
  shortenString,
};

export default commonMethods;
