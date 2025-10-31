/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    const num = n.toString().split("").map(Number);
    sum = num.reduce((acc,cur)=>acc+cur, 0);
    product = num.reduce((acc,cur)=>acc*cur, 1);

    return (product - sum)
};