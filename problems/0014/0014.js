/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for (let str of strs) {
        let i = 0;
        for (; i < str.length; i++) {
            if (i < prefix.length && prefix[i] === str[i]) continue;
            else break;
        }
        prefix = str.substring(0, i)
    }
    return prefix
   
};