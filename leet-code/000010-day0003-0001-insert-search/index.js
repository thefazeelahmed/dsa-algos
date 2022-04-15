/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = nums.indexOf(target);
  if (index !== -1) {
    return index;
  } else {
    let start = 0;
    let end = nums.length;
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (target > nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return start;
  }
};
