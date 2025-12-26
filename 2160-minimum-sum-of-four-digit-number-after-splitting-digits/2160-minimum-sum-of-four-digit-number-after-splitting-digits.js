/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let nums = num.toString().split("").sort((a,b)=>a-b);
    let num1 = nums[0]+nums[2];
    let num2 = nums[1]+nums[3];
    return Number(num1)+Number(num2);
};