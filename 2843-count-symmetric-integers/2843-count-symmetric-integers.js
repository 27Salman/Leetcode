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
        let sum1 = 0,sum2 = 0;

        for(let i = 0; i<n; i++){
            sum1 += str[i] - "0";
            sum2 += str[i+n] - "0";
        }

        if(sum1===sum2) num++;

        low++;

    }return num;
};