/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    for(let row of grid){
        row.sort((a,b)=> a-b);
    };

    let sum = 0;
    const num = grid[0].length;

    for (let col = 0; col < num; col++) {
        let max = 0;
        
        for (let row = 0; row < grid.length; row++) {
            max = Math.max(max, grid[row][col]);
        }

        sum += max;
    }

    return sum;
};