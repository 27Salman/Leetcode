/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums){
    let max1 = 0, max2=0;
    let min1 = Infinity, min2 = Infinity;

    for (let i = 0; i<nums.length; i++){
        let val = nums[i];

        if(val>max1){
            max2 = max1;
            max1 = val;
        }else if(val > max2){
            max2 = val;
        }

        if(val<min1){
            min2 = min1;
            min1 = val;
        }else if(val<min2){
            min2 = val;
        }
    }
    return (max1*max2) - (min1*min2);
};