/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let seen = {};
    let count = 0;
    for (const char of s) {
        if (!seen[char]) {
            seen[char] = true;
            count++;
        }
    }
    return count;
};