/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let freq = {};
    let length = 0;
    let hasOdd = false;

    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (let count of Object.values(freq)) {
        if (count % 2 === 0) {
            length += count;
        } else {
            length += count - 1; 
            hasOdd = true;       
        }
    }
    return hasOdd ? length + 1 : length;
};