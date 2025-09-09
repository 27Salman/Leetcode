// Smallest Even Multiple

var smallestEvenMultiple = function(n) {
    return (n%2!==0) ? 2*n:n;
};

console.log(smallestEvenMultiple(10));