/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let nums = [];
    let freq = arr.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    for(let i in freq){
        if(i==freq[i]){
            nums.push(freq[i]);
        }
    }
    return nums.length<1 ? -1 : Math.max(...nums)
};