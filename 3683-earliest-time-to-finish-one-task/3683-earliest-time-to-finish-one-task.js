/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function(tasks) {
    let result = 0;
    for(let i = 0; i<tasks.length; i++){
        let sum = 0;
        for(let j = 0; j<tasks[i].length; j++){
            sum += tasks[i][j];
        }
        tasks[i] = sum;
    }
    return Math.min(...tasks)
};