/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let freq = s.split("").reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    },[]);
    for(let str in freq){
        if(freq[str]===1) return s.split("").indexOf(str);
    }
    return -1;
};