/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const count = operations.reduce((acc,cur)=>{
        (cur === "++X" || cur === "X++") ? acc++ : acc--; 
        return acc;
    },0);
    return count;
};