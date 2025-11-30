/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    let n = nums1.length-1;
    for(let i = 0; i<=n;i++){
        if(nums2.includes(nums1[i])){
            arr.push(nums1[i]);
        }
    }
    let a = [...new Set(arr)]
    return a;
};