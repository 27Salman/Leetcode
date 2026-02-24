/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    let common = new Set();
    let n = A.length;
    let result = Array(n).fill(0);
    let count = 0;
    for(let i = 0; i<n; i++){
        common.has(A[i]) ? count++ : common.add(A[i]);
        common.has(B[i]) ? count++ : common.add(B[i]);
        result[i] = count;
    }return result;
};