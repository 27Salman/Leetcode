/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    return operations.reduce((acc,cur)=>{
            (cur === "++X" || cur === "X++") ? acc++ : acc--; 
            return acc;
            },0);
};