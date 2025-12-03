/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    let i = 0;
    while(i<n){
        arr.push(nums[i],nums[i+n]);
        i++
    }return arr;
};