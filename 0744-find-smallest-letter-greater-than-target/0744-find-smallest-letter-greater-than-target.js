/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const num = target.charCodeAt(0);
    const letter = letters.map(a => Number(a.charCodeAt(0))).filter(a => a > num && a!==num)
    return letter.length === 0 ? letters[0] : String.fromCharCode(letter[0]);
};