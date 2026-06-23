/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let numStr = nums.map(a => a.toString());

    numStr.sort((a,b)=>{
        let num1 = a + b;
        let num2 = b + a;
        return num2.localeCompare(num1) 
    });

    if(numStr[0] === '0') return '0';

    return numStr.join("")
};