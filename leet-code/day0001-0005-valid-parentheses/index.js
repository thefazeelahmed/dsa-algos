/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let itemMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      arr.push(s[i]);
    } else if (arr.pop() !== itemMap[s[i]]) {
      return false;
    }
  }

  if (arr.length === 0) return true;
  return false;
};
