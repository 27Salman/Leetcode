/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let count = 0;
    let max = 0;
    for(let i = 0; i <s.length; i++){
        if(s[i]==='E'){
            count++;
        }else{
            max = Math.max(count, max)
            count--;
        }
    }
    max = Math.max(count,max)
    return max;
};