// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const setNums = new Set();
  for(let i = 0; i < nums.length; i++) {
    if (setNums.has(nums[i])) {
      return true;
    }
    else {
      setNums.add(nums[i]);
    }
  }
  return false;
};
