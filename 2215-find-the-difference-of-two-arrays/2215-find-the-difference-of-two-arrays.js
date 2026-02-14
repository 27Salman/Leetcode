/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    const arr1 = [...set1].filter(a=>!set2.has(a));
    const arr2 = [...set2].filter(a=>!set1.has(a));
    return [arr1,arr2]
};