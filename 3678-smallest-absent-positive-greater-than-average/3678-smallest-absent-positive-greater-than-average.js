/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function(nums) {
    let x = Math.max(1,Math.floor(nums.reduce((acc,cur)=>acc+cur, 0)/nums.length)+1);
    let set = new Set(nums);
    while(set.has(x)){
        x++;
    }
    return x;
};