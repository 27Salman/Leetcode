/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let min = 0;
    for(let i = 0; i<nums.length; i++){
        let n = nums[i].toString().split("").reduce((acc,cur)=> acc+Number(cur), 0);
        if(Number(n) === i){
            min = Math.min(0,i);
        }
    };
    return min;
};