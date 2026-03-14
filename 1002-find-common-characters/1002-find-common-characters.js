/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    // 1. Initialize minFreq with the first word's character counts
    let minFreq = new Array(26).fill(Infinity);
    let firstWordCount = countFreq(words[0]);
    
    for (let i = 0; i < 26; i++) {
        minFreq[i] = firstWordCount[i];
    }

    // 2. Intersect with the counts of the remaining words
    for (let i = 1; i < words.length; i++) {
        let currentFreq = countFreq(words[i]);
        for (let j = 0; j < 26; j++) {
            // We take the minimum because it must exist in ALL words
            minFreq[j] = Math.min(minFreq[j], currentFreq[j]);
        }
    }

    // 3. Convert the frequency map back into an array of characters
    let result = [];
    for (let i = 0; i < 26; i++) {
        while (minFreq[i] > 0) {
            result.push(String.fromCharCode(i + 97)); // 97 is 'a'
            minFreq[i]--;
        }
    }

    return result;
};

// Helper function to count character frequencies
function countFreq(word) {
    let freq = new Array(26).fill(0);
    for (let char of word) {
        freq[char.charCodeAt(0) - 97]++;
    }
    return freq;
}