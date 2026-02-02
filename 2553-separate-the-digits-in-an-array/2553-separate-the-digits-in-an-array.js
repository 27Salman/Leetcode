/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = [];
    for(let num of nums){
        let str = num.toString().split("")
        for(let i = 0; i<str.length; i++){
            arr.push(Number(str[i]))
        }
    }return arr;
};