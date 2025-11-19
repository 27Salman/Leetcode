/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let count = 0;
    for(let num of operations){
        if(num === "X++" || num === "++X"){
            count++;
        }else{
            count--;
        }
    }return count;
};