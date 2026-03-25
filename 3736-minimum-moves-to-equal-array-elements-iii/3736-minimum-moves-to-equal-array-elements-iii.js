/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let max = Math.max(...nums);
    let count = 0;
    for(let i = 0; i<nums.length; i++){
        while(nums[i]!==max){
            nums[i] += 1;
            count++;
        }
    }return count;
};