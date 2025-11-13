/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let n = x.toString().split("").reduce((a,b)=>Number(a)+Number(b),0);
    if(x%n === 0) return n;
    return -1;
};