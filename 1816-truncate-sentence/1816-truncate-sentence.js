/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let str = s.split(" ").slice(0,k);
    return str.join(" ");
};