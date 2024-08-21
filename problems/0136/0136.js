/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length == 1) return nums[0];

  let hashMap = {};
  for (let num of nums) {
    if (!hashMap[num]) {
      hashMap[num] = 0;
    }
    hashMap[num]++;
  }
  for (let key in hashMap) {
    if (hashMap[key] == 1) {
      return key;
    }
  }
};
