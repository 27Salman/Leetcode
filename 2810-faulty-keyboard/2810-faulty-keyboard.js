/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = "";
    for(let j = 0; j<s.length; j++){
        if(s[j]==="i"){
            str = str.split("").reverse().join("");
        }else{
            str += s[j];
        }
    }return str;
};