/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result = Math.abs(x).toString().split('').reverse().join('') * Math.sign(x);
    return ( result<-(2**31) || result>2**31 ) ? 0 : result;
};