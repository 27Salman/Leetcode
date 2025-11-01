/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let n = 32;
    let arr = '';
    for(let i = 0; i<s.length;i++){
        if((/^A-Za-z/gi) && s[i]===s[i].toLowerCase() ){
            arr += s[i];
        }else if(s[i]===s[i].toUpperCase()){
            let str = s.charCodeAt(i) + n;
            arr += String.fromCharCode(str);
        }
    }
    return arr;
};