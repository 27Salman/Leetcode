/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    let ans = [];
    for(let i = 0; i<nums.length;i++){
        let arr = nums[nums[i]];
        ans.push(arr); 
    }return ans;
};