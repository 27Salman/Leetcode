// COnvert Integer to the sum of two no-zero Integers
var getNoZeroIntegers = function(n) {
    for(let i = 1 ; i<n; i++){
        let a = i;
        let b = n-i;
        if(!a.toString().includes('0') && !b.toString().includes('0')){
            return [a,b];
        }
    }
};

let num = 5;

console.log(getNoZeroIntegers(num));
