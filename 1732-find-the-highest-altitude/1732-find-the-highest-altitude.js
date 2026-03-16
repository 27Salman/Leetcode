/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let current = 0;
    let top = current;
    for(let altitude of gain){
        current += altitude;
        top = Math.max(top,current)
    }
    return top;
};