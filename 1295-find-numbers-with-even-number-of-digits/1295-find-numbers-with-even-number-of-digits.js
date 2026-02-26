/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    return nums.filter((a)=>{
                let n = a.toString().split("").length;
                return (n%2===0)
            }).length;
}