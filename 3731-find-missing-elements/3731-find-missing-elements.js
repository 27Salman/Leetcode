/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let set = new Set(nums);
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let arr = [];
    while(min<max){
        if(!set.has(min)){
            arr.push(min);
        }
        min++;
    }
    return arr
};