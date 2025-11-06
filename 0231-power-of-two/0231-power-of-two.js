/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n<=0) return false;
    let x = 0;
    while(2**x<=n ){
        if(n==2**x) return true;
        x++;
    }return false;
};