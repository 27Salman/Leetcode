/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    return Math.min(...nums.map(a=>String(a).split("").reduce((a,b)=>Number(a)+Number(b),0)));
};