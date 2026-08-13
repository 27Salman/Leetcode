/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    return date.split("-").map(a=>Number(a).toString(2)).join("-");
};