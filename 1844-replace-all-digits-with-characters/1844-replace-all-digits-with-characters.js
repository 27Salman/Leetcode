/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let str = s.split("")
    for(let i = 0; i<s.length; i++){
        if(i%2!==0){
            let n = i-1;
            let num = Number(str[i]);
            str[i] = String.fromCharCode(str[n].charCodeAt(0)+num);
        }
    }return str.join("");
};