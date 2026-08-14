/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const n = grid.length;
    const maxLocal = Array.from({length: n-2}, ()=> Array(n-2).fill(0));

    for(let i = 0; i < n - 2; i++){
        for(let j = 0; j < n - 2; j++){
            let maxVal = 0;

            for(let k = i; k < i + 3; k++){
                for(let l = j; l < j + 3; l++){
                    maxVal = Math.max(maxVal, grid[k][l]);
                }
            }
            maxLocal[i][j] = maxVal;
        }
    }
    return maxLocal;
};