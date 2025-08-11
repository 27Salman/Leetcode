// Filter Elements from Array

var filter = function(arr, fn) {
    let arr1 = [];
    for(let i = 0 ; i<arr.length ; i++){
        if(fn(arr[i],i)){
            arr1.push(arr[i]);
        }
    }return arr1;
};