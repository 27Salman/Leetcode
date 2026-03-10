/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let arr = [...s1.split(" "),...s2.split(" ")];
    return arr.filter(a=>arr.indexOf(a)===arr.lastIndexOf(a));
};