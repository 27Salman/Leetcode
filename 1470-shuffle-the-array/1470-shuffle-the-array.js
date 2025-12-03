/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let arr = [];
    let i = 0;
    while(i<=n/2){
        arr.push(nums[i]);
        arr.push(nums[n]);
        if(nums.length-1!==n) n++;
        i++;
    }return arr;
};