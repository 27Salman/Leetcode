/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    return new Set(
        word
        .replace(/[^0-9]/g, " ")
        .split(" ")
        .filter(a => a.length > 0)
        .map(a => a.replace(/^0+/, "") || "0") 
    ).size;
};