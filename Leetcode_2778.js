// Sum of aquares of Special Elements
var sumOfSquares = function(nums) {
    const n = nums.length;
    let count = 0;
    for(let i = 0; i < n; i++){
        if( n % (i+1) == 0){
            count += nums[i] * nums[i];
        }
    }return count;
};