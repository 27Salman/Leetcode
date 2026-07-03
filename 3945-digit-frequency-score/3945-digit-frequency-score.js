/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
    let m = n.toString().split("").map(a=>Number(a));
    let freq = {};
    let sum = 0;
    for(let i = 0; i<m.length; i++){
        freq[m[i]] = (freq[m[i]] || 0) + 1;
    }
    for(let num in freq){
        sum += freq[num] * num
    }return sum
};