// Array Reduce Transformation
var reduce = function(nums, fn, init) {
    let i = 0;
    while(i<nums.length){
        init = fn(init,nums[i]);
        i++;
    }
    return init;
};

let arr = [1,2,3,4,5];

function sum(accum, curr) { 
    return accum + curr; 
}

let init = 2;