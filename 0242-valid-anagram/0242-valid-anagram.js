/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    let count = {};
    for(let str of s){
        count[str] = (count[str]||0)+1;
    }
    for(let str of t){
        if(!count[str]) return false;
        count[str]--;
    }
    return true;
};