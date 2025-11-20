/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowels = ["a","e","i","o","u"];
    const freq = s.split("").reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
    },{});
    let maxVowel = [];
    let maxCon = [];
    for(let str in freq){
        if(vowels.includes(str)){
            maxVowel.push(freq[str]);
        }else{
            maxCon.push(freq[str]);
        }
    }let max = maxVowel.length ? Math.max(...maxVowel) : 0;
    let maxx = maxCon.length ? Math.max(...maxCon) : 0;
    let sum = max + maxx;
    return sum;
};