/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let arr =[];
    for(let i = 1; i<=n; i++ ){
        if(i%3===0 || i%5===0 || i%7===0 ){
            arr.push(i);
        }
    }
    const sum = arr.reduce((acc,cur)=>acc+cur,0);
    return sum;
};