/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let count = 0;
    let s = text.split(" ")
    for(let str of s){
        let cur = str.split("").filter(a=>brokenLetters.includes(a));
        if(cur.length<1) count++;
    }return count;
};