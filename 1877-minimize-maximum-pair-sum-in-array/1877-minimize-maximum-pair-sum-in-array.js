/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    let n = nums.sort((a,b)=>a-b);
    let left = 0, right = nums.length-1;
    let value = 0;
    while(left<=right){
        let a = n[left]+n[right];
        left++;
        right--;
        if(a>value) value = a;
    }return value;
}