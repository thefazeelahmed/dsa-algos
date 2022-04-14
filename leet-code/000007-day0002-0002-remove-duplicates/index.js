/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      while (nums[i] === nums[i + 1]) {
        nums.splice(i, 1);
      }
    }
  }
};
