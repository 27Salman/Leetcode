/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let max = 0;
    for(let str of strs){
        let val = /^\d+$/.test(str) ? Number(str) : str.length;    
        max = Math.max(val,max)
    }return max;
};