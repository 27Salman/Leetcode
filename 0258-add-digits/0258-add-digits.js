/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    function rma(c){
        return c.reduce((a,b)=>Number(a) + Number(b),0);
    } 
    while(num >= 1 ){
        let str = num.toString().split("");
        let n1 = rma(str);
        num = n1;
        if(num<10 && num > 0) break;
    }return num;
};