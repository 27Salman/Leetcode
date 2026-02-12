/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = [];
    while(left<=right){
        let num = left.toString().split("").map(Number);
        if(!num.includes(0) && num.every(a => left%a === 0)){
            arr.push(left);
        }
        left++;
    }return arr;
};