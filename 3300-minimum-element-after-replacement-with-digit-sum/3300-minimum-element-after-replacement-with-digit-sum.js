/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        nums[i]=nums[i].toString().split("").reduce((a,b)=>Number(a)+Number(b),0);
    }return Math.min(...nums);
};