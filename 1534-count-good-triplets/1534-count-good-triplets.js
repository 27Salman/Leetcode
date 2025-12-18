/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let n = arr.length;
    let count = 0;
    for(let i = 0; i<n-2; i++){
        for(let j =i+1; j<n-1; j++){
            if(Math.abs(arr[i]-arr[j])<=a){
                for(let k =j+1; k<n; k++){
                    let num2 = Math.abs(arr[j]-arr[k]);
                    let num3 = Math.abs(arr[i]-arr[k]);
                    if(num2<=b && num3<=c) count++;
                }
            }
        }
    }return count;
};