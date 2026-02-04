/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function(s, k, fill) {
    let n = s.length;
    while(n%k !== 0){
        s += fill;
        n++;
    }
    let arr = []
    let i = 0;
    while(i<n){
        let str1 = "";
        for(let j = 0; j<k ; j++){
            str1 += s[j+i];
        }
        arr.push(str1);
        i = i+k; 
    }return arr;
};