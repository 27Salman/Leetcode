/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let str = [];
    for(let j = 0; j<s.length; j++){
        if(s[j]==="i"){
            str.reverse();
        }else{
            str.push(s[j]);
        }
    }return str.join("");
};