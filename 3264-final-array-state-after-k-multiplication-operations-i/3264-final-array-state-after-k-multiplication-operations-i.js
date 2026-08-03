/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    let n = 1;
    while(n<=k){
        let num = Math.min(...nums);
        for(let i = 0; i <nums.length; i++){
            if(num === nums[i]){
                nums[i] = num*multiplier;
                break;
            }
        }
        n++;
    }return nums; 
};