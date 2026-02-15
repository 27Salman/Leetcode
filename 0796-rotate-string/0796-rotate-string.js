/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    let str = "";
    for(let i = 0; i<s.length; i++){
        str = s.slice(1)+s[0];
        if(str===goal) return true;
        s = str;
    }
    return false;
};