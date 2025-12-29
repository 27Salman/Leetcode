/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str1 = s.split("");
    for(let i  = 0; i<indices.length; i++){
        str1[indices[i]] = s[i];
    }return str1.join("");
};