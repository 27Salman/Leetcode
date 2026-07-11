/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
    let num = n.toString().split("").map(a=>Number(a));
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; i<num.length; i++){
        num1 += num[i];
        num2 += num[i]*num[i];
    }
    return ((num2 - num1) >= 50)
};