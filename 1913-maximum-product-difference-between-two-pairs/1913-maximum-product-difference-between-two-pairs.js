/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums){
    let min = nums.sort((a,b)=>a-b);
    let n = min.length;
    return ((min[n-1]*min[n-2])-(min[0]*min[1]))
};