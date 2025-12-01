/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    //let i = 0;
    let arr = [];
    let n = nums.length;
    if(!nums.includes(target) || nums.length === 0) return [-1,-1];
    for(let i = 0; i<=nums.length; i++){
        if(nums[i]===target){
            arr.push(i);
        }
        if(nums[-n-i]===target){
            arr.push(-n-i);
        }
    }return arr;
    // while(i<=nums.length){
    //     if(nums[i]===target){
    //         arr.push(i);
    //     }
    //     i++;
    // }return arr;
};