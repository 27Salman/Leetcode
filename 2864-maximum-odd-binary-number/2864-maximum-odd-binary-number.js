/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const n = s.length;
    const ones = [...s].filter(c => c === '1').length;
    return '1'.repeat(ones - 1) + '0'.repeat(n - ones) + '1';
};