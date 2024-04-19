/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let cur = m + n - 1;
    let i = m - 1;
    let j = n - 1;

    while (i >= 0 && j >= 0) {
       if (nums1[i] < nums2[j]) {
            nums1[cur] = nums2[j];
            j--;
        }
        else {
            nums1[cur] = nums1[i];
            i--;
        } 
        cur--;
    }
    for (let k = 0; k <= j; k++) {
        nums1[k] = nums2[k]
    }
};