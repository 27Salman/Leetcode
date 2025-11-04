/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = [];
    let str = s.replace(/\s+/g, " ").trim().split(" ");
    for(let i = str.length-1 ; i>=0 ;i--){
        arr.push(str[i]);

    }return arr.join(" ");
};