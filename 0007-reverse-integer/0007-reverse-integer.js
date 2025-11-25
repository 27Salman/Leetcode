/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let n = Math.abs(x).toString().split('').reverse().join('');
    if(n>2**31 || n<-(2**31)) return 0;
    return n*Math.sign(x);
};