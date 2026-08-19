/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count = 0;
    let occur = nums.join("").split("")
    for(let i = 0; i<occur.length; i++){
        if(occur[i]==digit) count++;
    }return count;
};