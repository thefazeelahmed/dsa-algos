/**
 * @param {string} s
 * @return {number}
 */

const table = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

let romanToInt = (s) =>
  s
    .split("")
    .reduce(
      (sum, char, i) =>
        table[s[i + 1]] > table[char] ? sum - table[char] : sum + table[char],
      0
    );
