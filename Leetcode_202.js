//Finding Happy number

var isHappy = function(n) {
    let available = new Set();
    function result(num){
        return num.toString().split("").map(n => Number(n)**2).reduce((acc,cur)=>acc+cur,0);
    }
    while(n!==1 && !available.has(n)){
        available.add(n);
        n=result(n);
    }return n===1;
};
console.log(isHappy(19));