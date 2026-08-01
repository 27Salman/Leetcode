/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let arr = [];
    for(let i of matrix){
        let max = [...i].reduce((acc,cur)=> cur + acc, 0);
        arr.push(max)
    }return arr
};