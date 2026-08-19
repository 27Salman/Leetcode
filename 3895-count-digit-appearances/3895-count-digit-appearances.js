/**
 * @param {number[]} nums
 * @param {number} digit
 * @return {number}
 */
var countDigitOccurrences = function(nums, digit) {
    let count = 0;
    let strDigit = String(digit);
    let occur = nums.join("");
    for(let i = 0; i<occur.length; i++){
        if(occur[i]==strDigit) count++;
    }return count;
};