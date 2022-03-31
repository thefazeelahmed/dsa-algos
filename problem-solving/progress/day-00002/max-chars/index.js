const maxChars = (str1) => {
  const charMap = (str) => {
    const obj = {};
    str.split("").forEach((item) => {
      if (obj.hasOwnProperty(item)) {
        obj[item] = +obj[item] + 1;
      } else {
        obj[item] = 1;
      }
    });
    return obj;
  };

  const objectMapStr1 = charMap(str1);

  let maxChar = null;
  let maxCount = 0;

  for (let key in objectMapStr1) {
    if (maxCount < objectMapStr1[key]) {
      maxCount = objectMapStr1[key];
      maxChar = key;
    }
  }

  return maxChar === null ? "String Might Be Empty" : maxChar;
};

console.log(maxChars(""));
