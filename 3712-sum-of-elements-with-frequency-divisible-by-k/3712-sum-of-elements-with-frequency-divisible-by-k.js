/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumDivisibleByK = function(nums, k) {
    let sum = 0;
    let freq = nums.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    for(let n in freq){
        if(freq[n]%k===0){
            sum += freq[n]*n;
        }
    }
    return sum;

};