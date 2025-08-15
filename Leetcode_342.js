// Power of 4

var isPowerOfFour = function(n) {
    while(n>0 && n%4===0){
        n = n/4;
    }return n===1;
};
console.log(isPowerOfFour(16));