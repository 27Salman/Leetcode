/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    return nums.filter((value)=>nums.indexOf(value)===nums.lastIndexOf(value)).reduce((a,b)=>a+b,0);
};