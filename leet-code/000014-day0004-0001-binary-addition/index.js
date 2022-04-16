/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let binaryA = BigInt(`0b${a}`);
  let binaryB = BigInt(`0b${b}`);
  let sum = binaryA + binaryB;
  return sum.toString(2);
};
