/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    return k!==1 ? s.slice(0,k).split("").reverse().join("")+s.slice(k):s;
};