/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    let result = [];
    for(let i = 0; i<prices.length; i++){
        let flag = false;
        for(let j = i+1; j<prices.length; j++){
            let num = 0;
            if(prices[j] <= prices[i]){
                flag = true;
                num = prices[i] - prices[j];
                result.push(num);
                break;
            }
        }
        if(flag===false){
            result.push(prices[i])
        }
    }return result;
};