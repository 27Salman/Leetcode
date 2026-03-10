/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let word1 = s1.split(" ");
    let word2 = s2.split(" ");
    let arr = [...word1,...word2];
    return arr.filter(a=>arr.indexOf(a)===arr.lastIndexOf(a));
};