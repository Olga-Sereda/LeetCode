/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let arr = x.toString().split('');

    let j = arr.length - 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[j]) {
            j--
        } else {
            return false
        }

    } return true
};