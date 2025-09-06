// Missing Number

var missingNumber = function(nums) {
    let n = nums.length;
    let first = (n*(n+1)/2);
    let second = nums.reduce((a,b)=>a+b,0)
    return (first - second);
};
let num = [3,0,1];
console.log(missingNumber(num));

