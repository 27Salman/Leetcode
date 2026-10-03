/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let count = 0;
    for(let num of grid){
        for(let i = 0; i<num.length; i++){
            if(num[i]<0) count++;
        }
    }return count;
};