/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1 = [...new Set(nums1)].filter(a=>!nums2.includes(a));
    let arr2 = [...new Set(nums2)].filter(a=>!nums1.includes(a));
    return [arr1,arr2]
};