/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let current = 0;
    let totalTime = 0;
    for(let req of requests){
        totalTime += Math.abs(current - req);
        current = req
    }return totalTime;
};