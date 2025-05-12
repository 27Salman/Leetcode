// Squares of a sorted array
var sortedSquares = function(nums) {
    nums = nums.map(n => n*n).sort((a,b)=>a-b);
    return nums;
};