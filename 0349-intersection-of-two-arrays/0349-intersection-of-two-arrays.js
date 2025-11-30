/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let arr = [];
    let n = nums1.length-1;
    let i = 0;
    while(i<=n){
        if(nums2.includes(nums1[i])){
            arr.push(nums1[i]);
        }i++;
    }
    let a = [...new Set(arr)]
    return a;
};