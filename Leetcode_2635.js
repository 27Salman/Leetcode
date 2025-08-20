// Apply Transform Over Each Element in Array

var map = function(arr, fn) {
    let newArr = [];
    for(let i=0; i<arr.length; i++){
        newArr.push(fn(arr[i],i));
    }return newArr;
};

console.log(map([1,2,3],function plusone(n) { return n + 1; }
))