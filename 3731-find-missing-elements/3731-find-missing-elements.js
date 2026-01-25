/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function(nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let arr = [];
    while(min<max){
        if(!nums.includes(min)){
            arr.push(min);
        }
        min++;
    }
    return arr
};