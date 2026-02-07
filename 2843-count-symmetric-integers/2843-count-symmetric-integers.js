/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let num = 0;
    while(low<=high){
        let str = low.toString().split("")
        if(str.length%2 !==0 ){
            low++;
            continue;
        }
            let n = str.length/2;
            let sum1 = 0; 
            let sum2 = 0;
            for(let i = 0; i<n; i++){
                sum1 += Number(str[i]);
                sum2 += Number(str[i+n]);
            }
            if(sum1===sum2) num++
        low++;
    }return num
};