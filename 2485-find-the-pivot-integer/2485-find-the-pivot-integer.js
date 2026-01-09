/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let total = (n*(n+1))/2;
    let x = Math.sqrt(total);
    return Number.isInteger(x) ? x : -1;
};