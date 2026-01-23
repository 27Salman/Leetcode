/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num){
    let nums = num.split('');
    let freq = nums.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    for(let i = 0; i<nums.length; i++){
        if(Number(nums[i]) !== (freq[i]||0)){
            return false;
        }
    }return true;
};