/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let positive = [];
    let negative = [];
    let result = [];
    let n = nums.length;
    for(let i = 0; i<n; i++){
        if(nums[i]>=0){
            positive.push(nums[i]);
        }else{
            negative.push(nums[i]);
        }
    }
    let x = 0;
    let y = 0;
    for(let j = 0; j<n; j++){
        if(j%2 === 0 ){
            result.push(positive[x]);
            x++;
        }else{
            result.push(negative[y]);
            y++
        }
    }return result;
};