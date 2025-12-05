/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums){
    let remove = false;
    for(let i = 1; i<nums.length; i++){
        if(nums[i-1]>=nums[i]){
            if(remove) return false;
            remove = true;
            if(i===1 || nums[i]>nums[i-2]){
                continue;
            }
            nums[i] = nums[i-1];
        }
    }
    return true;
};