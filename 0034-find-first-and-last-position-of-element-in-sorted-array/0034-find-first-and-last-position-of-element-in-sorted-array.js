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
    for(let i = 0; i<=n; i++){
        if(nums[i]===target){
            arr.push(i);
            break;
        }
    }
    for(let j = n-1; j>=0; j--){
        if(nums[j]===target){
            arr.push(j);
            break;
        }
    }return arr;
    // while(i<=nums.length){
    //     if(nums[i]===target){
    //         arr.push(i);
    //     }
    //     i++;
    // }return arr;
};