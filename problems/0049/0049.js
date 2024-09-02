/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let result = [];
  let data = {};
  for (let i = 0; i < strs.length; i++) {
    let count = Array(26).fill(0);
    for (let char of strs[i]) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (!data[count]) {
      data[count] = [];
    }
    data[count].push(strs[i]);
  }
  for (let key in data) {
    result.push(data[key]);
  }
  return result;
};
