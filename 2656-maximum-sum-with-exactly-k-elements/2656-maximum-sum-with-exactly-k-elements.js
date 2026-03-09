/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum = 0;
    let num = nums.sort((a,b)=>b-a);
    for(let i = 0; i<k; i++){
        sum += num[0];
        num[0] = num[0]+1;
    }return sum;
};