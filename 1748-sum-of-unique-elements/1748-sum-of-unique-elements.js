/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return nums.filter(val=>nums.indexOf(val)===nums.lastIndexOf(val)).reduce((a,b)=>a+b,0);
};