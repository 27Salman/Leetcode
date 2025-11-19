/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    const count = operations.reduce((acc,cur)=>{
        if(cur === "++X" || cur === "X++"){
            acc++;
        }else{
            acc--;
        }return acc;
    },0);
    return count;
};