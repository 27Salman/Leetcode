/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var absDifference = function(nums, k) {
    nums.sort((a,b)=>b-a);
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i<k; i++){
        sum1 += nums[i];
        sum2 += nums[nums.length-i-1];
    }return Math.abs(sum1-sum2);
};