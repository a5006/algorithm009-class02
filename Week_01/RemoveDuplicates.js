/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 0; //每次循环的指针
  var j = 0; // 不是相同数的指针
  while (i < nums.length) {
    if (nums[i] !== nums[i + 1]) {
      nums[j] = nums[i];
      j++;
    }
    i++;
  }
  return j;
};
