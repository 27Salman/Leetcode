/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let n = nums.sort((a,b)=>a-b);
    let left = 0, right = nums.length-1, half = nums.length/2;
    let value = 0;
    while(left<=right){
        let a = nums[left]+nums[right];
        left++;
        right--;
        if(a>value) value = a;
    }return value;
}