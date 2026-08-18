/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let oddCount = 0;
    let evenCount = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] % 2 !== 0) {
            result[i] = evenCount;
            oddCount++;
        } else {
            result[i] = oddCount;
            evenCount++;
        }
    }

    return result;
};