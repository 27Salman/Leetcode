/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let n = nums.length;
    const times = nums.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    for(let num in times){
        if(times[num] > (n/2)) return Number(num);
    }
};