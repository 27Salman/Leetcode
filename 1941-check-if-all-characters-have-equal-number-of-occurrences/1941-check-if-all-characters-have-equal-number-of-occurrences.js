/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let freq = s.split("").reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    let num = new Set(Object.values(freq));
    return num.size === 1 ? true:false;
};