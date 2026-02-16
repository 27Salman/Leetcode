/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let n = nums.length;
    let result = new Array(n);
    let positive = 0;
    let negative = 1;
    for(let i = 0; i<n; i++){
        if(nums[i]>=0){
            result[positive] = nums[i];
            positive += 2;
        }else{
            result[negative] = nums[i];
            negative += 2;
        }
    }return result;
};