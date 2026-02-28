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

    // 2. Put them back in, but pull from the end of the arrays (reversing them)
    for (let i = 0; i < result.length; i++) {
        if (/[a-zA-Z]/.test(result[i])) {
            result[i] = letters.pop(); // Reverses letters
        } else if (/[^a-zA-Z0-9]/.test(result[i])) {
            result[i] = specials.pop(); // Reverses specials
        }
    }

    return result.join("");
};