/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let sum = nums.reduce((acc,cur)=>acc+cur,0);
    if(sum%k===0){
        return 0;
    }
    if(sum < k){
        return sum;
    }
    return sum%k;
};