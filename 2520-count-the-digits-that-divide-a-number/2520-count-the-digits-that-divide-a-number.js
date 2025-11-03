/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let count = 0;
    let n = num.toString().split("");
    for(let i = 0; i<=n.length;i++){
        if(num%Number(n[i])===0) count++;
    }return count;
};