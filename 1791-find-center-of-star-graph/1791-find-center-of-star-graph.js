/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let n = edges.length;
    let nums = edges.flat(Infinity).reduce((acc,cur)=> {
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
    },{});
    let result = 0
    for(let num in nums){
        if(nums[num]===n){
            result = Number(num);
        }
    };
    return result;
};