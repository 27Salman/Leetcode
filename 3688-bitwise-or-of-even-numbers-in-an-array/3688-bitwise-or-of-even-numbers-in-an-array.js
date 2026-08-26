/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let result = 0;
    for(const num of nums){
        if(num%2 === 0){
            result = result | num
        }
    }
    return result; 
};