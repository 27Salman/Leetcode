/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    let word = 'a';

    while(word.length < k){
        let next = "";
        for(let char of word){
            next += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        word += next;
    }
    return word[k - 1];
};