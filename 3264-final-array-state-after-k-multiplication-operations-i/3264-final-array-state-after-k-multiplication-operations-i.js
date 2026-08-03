/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    for(let i = 0; i<k; i++){
        let min = Math.min(...nums);
        let minIndex = nums.indexOf(min);
        nums[minIndex] *= multiplier;
    }
    return nums; 
};