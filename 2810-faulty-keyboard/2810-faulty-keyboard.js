/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = [];
    for(let j = 0; j<s.length; j++){
        s[j]==="i" ? str.reverse() : str.push(s[j]);
    }return str.join("");
};