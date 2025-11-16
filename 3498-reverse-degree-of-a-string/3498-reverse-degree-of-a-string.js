/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
    let productSum = 0
    for (let i = 1; i <= s.length; i++) {
        productSum+=(123-s.charCodeAt(i-1))*i      
    }
    return productSum
};