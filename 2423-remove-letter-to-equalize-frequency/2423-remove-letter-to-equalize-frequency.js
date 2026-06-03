/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
    for(let i = 0; i<word.length; i++){
        let freq = {};
        for(let j = 0; j<word.length; j++){
            if(i === j) continue;
            freq[word[j]] = (freq[word[j]] || 0 ) + 1;
        }
        let result = Object.values(freq);
        let equal = result.every(val => val === result[0]);
        if(equal) return true;
    }
    return false
};