/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let arr = [];
    for(let i of matrix){
        let sum = 0;
        for(let j = 0; j<i.length; j++){
            sum += i[j];
        }
        arr.push(sum);
    }return arr
};