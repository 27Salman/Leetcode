/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let element = nums.reduce((a,b)=>a+b,0);
    let digit = nums.join("").split("").reduce((a,b)=>Number(a)+Number(b),0);
    return Math.abs(element - digit)

};