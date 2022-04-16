/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let a = 1;
  let b = 1;
  let t = 0;
  for (let i = 2; i <= n; i++) {
    t = a + b;
    a = b;
    b = t;
  }
  return b;
};
