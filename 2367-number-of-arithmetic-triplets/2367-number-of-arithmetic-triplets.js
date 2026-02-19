/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0 ;
    for(i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            for(k=0;k<nums.length;k++){
                if(nums[j] - nums[i] == diff && nums[k] - nums[j] == diff){
                    count++
                }
            }
        }
    }
    return count
};