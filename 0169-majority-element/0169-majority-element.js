/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (arr) {
    let n = arr.length;
    let element;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if(count == 0){
            count = 1;
            element = arr[i];
        }
        else if(arr[i] == element) count++;
        else count--;
    }
    return element;
};