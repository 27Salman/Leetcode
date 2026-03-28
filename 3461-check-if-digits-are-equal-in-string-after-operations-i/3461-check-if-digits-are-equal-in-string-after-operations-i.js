/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function(s) {
    while(2 < s.length){
         let str = "";
        for(let i = 1; i<s.length; i++){
            str += (Number(s[i])+Number(s[i-1]))%10;
        }
        s = str;
    }return s[0] === s[1]
};