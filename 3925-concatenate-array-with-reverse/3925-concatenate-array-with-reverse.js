/**
 * @param {number[]} nums
 * @return {number[]}
 */
var concatWithReverse = function(nums) {
    let arr = [];
    let i = nums.length-1
    while(i>=0) {
        arr.push(nums[i]);
        i--;
    }
    return [...nums,...arr]
};