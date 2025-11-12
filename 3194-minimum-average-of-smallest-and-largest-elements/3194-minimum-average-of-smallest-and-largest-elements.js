/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    nums.sort((a,b)=>b-a);
    let avg =  [];
    let i = 0, j = nums.length-1;
    while(i<j){
        let average = (nums[i]+nums[j])/2;
        avg.push(average);
        i++;
        j--;
    }return Math.min(...avg);
};