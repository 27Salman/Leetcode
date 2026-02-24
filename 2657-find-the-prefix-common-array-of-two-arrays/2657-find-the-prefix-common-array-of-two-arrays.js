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
        if(common.has(A[i])){
            count++;
        }else{
            common.add(A[i]);
        }
        if(common.has(B[i])){
            count++;
        }else{
            common.add(B[i]);
        }
        result[i] = count;
    }return result;
};