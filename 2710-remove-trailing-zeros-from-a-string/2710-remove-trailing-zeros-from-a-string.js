/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let str ="";
    for(let i = num.length-1; i>=0; i--){
        if(num[i]==="0"){  
            str = num.slice(0,i);
        }else{
            break;
        }
    }return str.length === 0 ? num:str
};