/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let num = nums.sort((a,b)=> a-b);
    for(let i = 0; i<num.length; i += 2){
        let temp = num[i];
        num[i] = num[i+1];
        num[i+1] = temp;
    }return num
};