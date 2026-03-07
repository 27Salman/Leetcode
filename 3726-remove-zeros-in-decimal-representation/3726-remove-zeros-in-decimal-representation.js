/**
 * @param {number} n
 * @return {number}
 */
var removeZeros = function(n) {
    const num = n.toString().split("").filter(a=>a!=="0").join("");
    return Number(num);
};