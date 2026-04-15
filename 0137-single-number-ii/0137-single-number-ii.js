/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let freq = nums.reduce((acc,cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },[]);
    for(let i in freq){
        if(freq[i] === 1) return Number(i);
    }
};