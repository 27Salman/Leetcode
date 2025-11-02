/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let num = [];
    for(let str of sentences){
        let max = 0;
        for(let str1 of str.split(" ")){
            max = max+1;
        }
        num.push(max);
    }
    let n = Math.max(...num);
    console.log(n)
    return n;
};