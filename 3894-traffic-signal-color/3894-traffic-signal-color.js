/**
 * @param {number} timer
 * @return {string}
 */
var trafficSignal = function(timer) {
    return timer === 0 ? "Green" : timer === 30 ? "Orange" : timer > 30 && timer <= 90 ? "Red" : "Invalid"
};