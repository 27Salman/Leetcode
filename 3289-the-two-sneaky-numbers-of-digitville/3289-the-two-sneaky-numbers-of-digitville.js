/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    return nums.filter((val,index)=>nums.indexOf(val)!==index);
};