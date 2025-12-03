/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    for(let i = 0; i<=n/2; i++){
        arr.push(nums[i]);
        arr.push(nums[n]);
        if(nums.length-1!==n) n++;
    }return arr;
};