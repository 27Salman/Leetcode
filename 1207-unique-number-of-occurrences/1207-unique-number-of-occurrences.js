/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let freq = arr.reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    let n = Object.values(freq);
    let num = new Set(n);
    return n.length === num.size;  
};