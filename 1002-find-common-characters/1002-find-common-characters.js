/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let minFreq = new Array(26).fill(Infinity);
    let firstWordCount = countFreq(words[0]);
    
    for (let i = 0; i < 26; i++) {
        minFreq[i] = firstWordCount[i];
    }
    for (let i = 1; i < words.length; i++) {
        let currentFreq = countFreq(words[i]);
        for (let j = 0; j < 26; j++) {
            minFreq[j] = Math.min(minFreq[j], currentFreq[j]);
        }
    }
    let result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            minFreq[i]--;
        }
    }

    return result;
};

function countFreq(word) {
    let freq = new Array(26).fill(0);
    for (let char of word) {
        freq[char.charCodeAt(0) - 97]++;
    }
    return freq;
}