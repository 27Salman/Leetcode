/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let temp = new Map();

    for(let i = 0; i < nums.length; i++){
        let curr = nums[i];
        let exp = target - curr;

        if(temp.has(exp)){
            return [i, temp.get(exp)];
        }

        temp.set(curr, i);
    }

};