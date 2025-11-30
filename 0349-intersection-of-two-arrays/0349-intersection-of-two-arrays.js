/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    let n = nums1.length+nums2.length-2;
    for(let i = 0; i<=n;i++){
        if(nums1.includes(nums2[i])){
            arr.push(nums2[i]);
        }else if(nums2.includes(nums1[i])){
            arr.push(nums1[i]);
        }
    }
    let a = [...new Set(arr)]
    return a;
};