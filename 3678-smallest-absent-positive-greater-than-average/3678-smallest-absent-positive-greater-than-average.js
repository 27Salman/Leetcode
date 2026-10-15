/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let sum = 0;
    for(let i = 0; i<nums.length; i++){
        sum += nums[i];
    }
    let avg = sum/nums.length;
    let x = Math.max(1,Math.floor(avg)+1);
    let set = new Set(nums);
    while(set.has(x)){
        x++;
    }
    return x;
};