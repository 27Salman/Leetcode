/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let arr1 = nums1.filter(a=>!nums2.includes(a));
    let arr2 = nums2.filter(a=>!nums1.includes(a));
    return [[...new Set(arr1)],[...new Set(arr2)]]
};