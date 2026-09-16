/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let min = 0;
    let max = 0;
    let result = 0;
    for(let i = 0; i<nums.length; i += 2){
        min = Math.min(nums[i], nums[i+1])
        max += min
    }
    return max
};