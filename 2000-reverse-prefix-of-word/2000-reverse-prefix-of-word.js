/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let right = word.indexOf(ch);
    word = word.split("");
    for(let i = 0; i<right;i++){
        let temp = word[i];
        word[i] = word[right];
        word[right] = temp;
        right--;
    }return word.join("");
};