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
    let flag = false;
    for(let i = 0; i<nums.length; i++){
        for(let str in freq){
            console.log(str)
            if(i!==freq[str]){
                flag = true;
                continue;
            }else{
                flag = false;
                break;
            }
        }
    }return flag
};