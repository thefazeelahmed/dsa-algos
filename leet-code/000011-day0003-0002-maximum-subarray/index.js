/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
  let max = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = sum > max ? sum : max;
  }
  return max;
};
