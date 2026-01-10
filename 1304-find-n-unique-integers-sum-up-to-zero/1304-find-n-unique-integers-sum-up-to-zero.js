/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let sum = 0;
    let num = [];
    for(let i = 0; i<n-1; i++){
        num.push(i+1);
        sum += i+1;
    }
    num.push(-sum);
    return num;
};