/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for(num of nums){
        let n = num.toString().split("").length;
        if(n%2===0) count++;
    }return count;
};