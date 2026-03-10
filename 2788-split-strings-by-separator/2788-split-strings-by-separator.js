/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    let s = []
    for(let str of words){
        let n = str.split(separator);
        for(let word of n){
            if(word.length > 0){
                s.push(word);
            }
        }
    }return s;
};