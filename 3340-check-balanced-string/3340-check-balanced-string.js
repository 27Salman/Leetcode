/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let sum = 0;
    for(let i  = 0; i<num.length; i++){
        sum += ( i % 2 === 0 ) ? +num[i] : -num[i];
    }
    return sum === 0;
};