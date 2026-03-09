/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    let n = nums.length - 1;
    for(let i = 0; i<k; i++){
        sum += nums[n];
        nums[n] = nums[n]+1;
    }return sum;
};