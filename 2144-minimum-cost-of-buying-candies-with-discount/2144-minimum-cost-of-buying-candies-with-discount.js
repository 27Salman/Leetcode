/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
    cost.sort((a,b)=> b-a);
    let sum = 0;
    for(let i = 0; i<cost.length; i++){
        if(( i + 1) % 3 === 0) continue;
        sum += cost[i];
    }
    return sum;
};