/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = [];
    for(let i = 0; i<n; i++){
        arr[i] = start + 2 * i;
    }
    let xor = 0;
    for(let num of arr){
        xor = xor^num;
    }
    return xor;
};