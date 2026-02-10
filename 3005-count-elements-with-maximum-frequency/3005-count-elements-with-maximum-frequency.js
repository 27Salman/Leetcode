/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let count = 0;
    let max = 0;
    let freq = nums.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    for(let num in freq){
        max = Math.max(max,freq[num]);
    }
    for(let nums in freq){
        if(max === freq[nums]) count += max;
    }
    return count;
};