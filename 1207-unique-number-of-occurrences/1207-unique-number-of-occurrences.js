/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = new Map();
    for (const num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }    
    const freq = Array.from(count.values());
    const uniqFreq = new Set(freq);
    return freq.length === uniqFreq.size;
};