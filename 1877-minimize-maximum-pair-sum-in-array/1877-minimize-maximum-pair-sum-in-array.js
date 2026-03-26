/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let left = 0, right = nums.length-1;
    let value = 0;
    while(left<=right){
        value = Math.max(value, nums[left] + nums[right])
        left++;
        right--;
    }return value;
}