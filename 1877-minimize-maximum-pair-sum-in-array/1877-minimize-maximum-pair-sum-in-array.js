/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    let max = 0;
    const n = nums.length;
    const half = n >> 1;

    for (let i = 0; i < half; i++) {
        const sum = nums[i] + nums[n - 1 - i];
        if (sum > max) max = sum;
    }
    
    return max;
}