/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let arr = new Array(encoded.length+1);

    for(let i = 0; i<encoded.length; i++){
        if(i===0) {
            arr[i] = first;
        }
        arr[i+1] = encoded[i] ^ arr[i];
    }
    return [...arr]
};