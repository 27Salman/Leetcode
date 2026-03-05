/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const counts = new Map();
    for (const num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }    
    const frequencies = Array.from(counts.values());
    const uniqueFrequencies = new Set(frequencies);
    return frequencies.length === uniqueFrequencies.size;
};