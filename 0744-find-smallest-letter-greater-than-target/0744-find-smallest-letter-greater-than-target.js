/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    for(let word of letters){
        if(word > target){
            return word;
        }
    }
    return letters[0];
};