// Divisible and Non-divisible Sums Difference
var differenceOfSums = function(n, m) {
    let num1 = 0;
    let num2 = 0;
    let i = 1;
    while(i<=n){
        if(i%m!==0){
            num1 += i;
        }else{
            num2 += i;
        }
        i++;
    }return (num1 - num2);
};

console.log(differenceOfSums(10,3));
