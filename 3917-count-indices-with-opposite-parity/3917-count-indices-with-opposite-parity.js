/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        let count = 0;
        if(nums[i]%2 !== 0){
            for(let j = i+1; j<nums.length; j++){
                if( nums[j]%2===0 ) count++;
            }
            nums[i] = count;
        }else{
            for(let j = i+1; j<nums.length; j++){
                if( nums[j]%2 !==0 ) count++;
            }
            nums[i] = count;
        }
    }return nums;
};