/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let romans = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = [];
  for (let i = 0; i < romans.length; i++) {
    let [val, key] = romans[i];
    if (val <= num) {
      let count = num / val;
      result.push(key.repeat(count));
      num = num % val;
    }
  }
  return result.join("");
};
