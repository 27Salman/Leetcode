/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let n = 32;
    let arr = [];
    for(let i = 0; i<s.length;i++){
        if(s[i]===s[i].toUpperCase()){
            let str = s.charCodeAt(i) + n;
            arr.push(String.fromCharCode(str));
        }else{
            arr.push(s[i]);
        }
    }
    return arr.join('');
};