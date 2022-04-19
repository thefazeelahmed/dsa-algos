const areAnagrams = (str1, str2) => {
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
  const objectMapStr2 = charMap(str2);

  console.log(objectMapStr1, objectMapStr2);

  if (Object.keys(objectMapStr1).length !== Object.keys(objectMapStr2).length) {
    return false;
  }

  for (let key in objectMapStr1) {
    console.log(objectMapStr1[key], objectMapStr2[key], key);
    if (objectMapStr1[key] !== objectMapStr2[key]) {
      return false;
    }
  }
  return true;
};

console.log(areAnagrams("polo", "lopo"));
console.log(areAnagrams("poolo", "lopo"));
