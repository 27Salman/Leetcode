/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function(n, requests) {
    let current = 0;
    let totalTime = 0;
    const len = requests.length;
    
    for (let i = 0; i < len; i++) {
        const req = requests[i];
        const diff = req - current;
        totalTime += diff < 0 ? -diff : diff;
        current = req;
    }return totalTime;
};