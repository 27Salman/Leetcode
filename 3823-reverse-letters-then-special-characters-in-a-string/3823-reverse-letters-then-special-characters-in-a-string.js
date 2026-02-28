/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function(s) {
    let letters = [];
    let specials = [];
    let result = s.split("");

    for (let char of s) {
        if (/[a-zA-Z]/.test(char)) letters.push(char);
        else if (/[^a-zA-Z0-9]/.test(char)) specials.push(char);
    }
    for (let i = 0; i < result.length; i++) {
        if (/[a-zA-Z]/.test(result[i])) {
            result[i] = letters.pop(); 
        } else if (/[^a-zA-Z0-9]/.test(result[i])) {
            result[i] = specials.pop(); 
        }
    }

    return result.join("");
};