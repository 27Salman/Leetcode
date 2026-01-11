/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let str = "";
    let i = 0;
    while(i<words.length){
        str += words[i][0];
        i++;
    }
    return (str === s);
};