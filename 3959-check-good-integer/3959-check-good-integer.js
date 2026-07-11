/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let num = n.toString().split("").map(a=>Number(a));
    let num1 = num.reduce((acc,cur)=> acc+cur, 0);
    let num2 = num.reduce((acc,cur)=> acc+cur*cur, 0);
    return ((num2 - num1) >= 50)
};