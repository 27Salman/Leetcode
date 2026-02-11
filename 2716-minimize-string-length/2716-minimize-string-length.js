/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    return s.split("").filter((a,index)=>s.indexOf(a)===index).length;
};