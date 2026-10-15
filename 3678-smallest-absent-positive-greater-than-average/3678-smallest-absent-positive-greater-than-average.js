/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let sum = nums.reduce((acc,cur)=>acc+cur, 0)
    let avg = sum/nums.length;
    let x = Math.max(1,Math.floor(avg)+1);
    let set = new Set(nums);
    while(set.has(x)){
        x++;
    }
    return x;
};