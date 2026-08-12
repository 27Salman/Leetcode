/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let n = mat.length;
    let sum = 0;

    for(let i = 0; i<n; i++){
        sum += mat[i][i];
        sum += mat[i][n - 1 - i];
    }

    if( n % 2 !== 0){
        let mid = Math.floor(n / 2);
        sum -= mat[mid][mid];
    }

    return sum;
};