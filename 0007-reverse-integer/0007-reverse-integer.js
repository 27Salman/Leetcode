/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n = Math.abs(x).toString().split('').reverse().join('');
    let result = n*Math.sign(x);
    if(result>2**31 || result<-(2**31)) return 0;
    return result;
};