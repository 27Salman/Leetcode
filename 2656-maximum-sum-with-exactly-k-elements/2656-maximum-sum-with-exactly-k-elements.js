/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    let num = Math.max(...nums);
    for(let i = 0; i<k; i++){
        sum += num;
        num = num+1;
    }return sum;
};