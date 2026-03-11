/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0;
    let str = s.split("");
    let word = "";
    for(let i = 0; i<str.length; i++){
        word += str[i];
        for(let j = 0; j<words.length; j++){
            if(word === words[j]) count++;
        }
    }return count;
};