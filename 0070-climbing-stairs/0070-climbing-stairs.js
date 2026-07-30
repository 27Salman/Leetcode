/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<=2) return n;
    let num1 = 1;
    let num2 = 2;

    for(let i = 3; i<=n; i++){
        let current = num1+num2;
        num1 = num2;
        num2 = current;
    };

    return num2;
};