/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let num = new Set();
    for(let i = 0; i<s.length; i++){
        if(num.has(s[i])) return s[i];
        else num.add(s[i]);
    }
};