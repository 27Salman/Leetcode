/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);
    let i = 1;
    let mainMax = 0;
    while(i<=min){
        if(max%i===0 && min%i===0){
            mainMax = Math.max(mainMax,i)
        }
        i++;
    }
    return mainMax;
};