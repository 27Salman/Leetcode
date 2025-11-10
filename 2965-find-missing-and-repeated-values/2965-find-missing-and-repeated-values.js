/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let arr = []
    let num = grid.flat(Infinity);
    let num1 = num.reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
    },{});
    for(let n in num1){
        if(num1[n]>1) arr.push(Number(n));
    }
    for(let i = 1; i<=num.length;i++){
        if(!num.includes(i)) arr.push(i);
    }
    return arr;
};