/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let arr = [];
    let max = Math.max(...candies);
    for(let i = 0; i<candies.length; i++){
        let num = candies[i] + extraCandies;
        if(num < max){
            arr.push(false)
        }else{
            arr.push(true)
        }
    }return arr;
};