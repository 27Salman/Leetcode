/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let num = new Set();
    let n = nums.length;
    for(let i = 0; i<n; i++){
        if(num.has(nums[i])) num.delete(nums[i]);
        else num.add(nums[i]);
    }
    return num.size === 0;
};