/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.split('').sort();
    let b = t.split('').sort();

    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.length == b.length) {
            if (a[i] === b[j]) {
                j++
            }
            else {
                return false
            } 
        } else {
            return false
        }
    } return true
};