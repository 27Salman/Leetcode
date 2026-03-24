/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    let count=0;
    let arr=[];
    for(const char of s){
        if(!arr.includes(char)){
            arr.push(char);
            count++;
        }
    }
    return count;
};