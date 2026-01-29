/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    let num1 = Number(num.toString().split("").reverse().join(""));
    let num2 = Number(num1.toString().split("").reverse().join(""));
    console.log(num1,num2)
    return num===num2 ? true:false;
};