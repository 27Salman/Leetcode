/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr=[/a-z/];
    let count = 0;
    for(let i = 0; i<=sentence.length;i++){
        if(arr.includes(sentence[i])){
            count++;
        }
    }
    return count===sentence.length;
};