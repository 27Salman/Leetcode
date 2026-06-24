/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let odd = [];
    let even = [];
    for(let i = 0; i<nums.length; i++){
        nums[i]%2 === 0 ? even.push(nums[i]) : odd.push(nums[i]);
    }
    return [...even,...odd]
};