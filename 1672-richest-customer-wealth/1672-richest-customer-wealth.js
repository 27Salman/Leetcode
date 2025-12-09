/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let arr = [];
    for(let num of accounts){
        let sum = 0;
        for(let nums of num){
            sum += nums;
        }arr.push(sum);
    }return Math.max(...arr);
};