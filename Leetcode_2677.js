// Chunk array

var chunk = function(arr, size) {
    if (size <= 0) return false;
    let newArr = [];
    let i = 0;
    while(i<arr.length){
        newArr.push(arr.slice(i,i+size));
        i+=size;
    }return newArr;
};
let num = [1,2,3,4,5,6,7,8,9];
console.log(chunk(num,3));

