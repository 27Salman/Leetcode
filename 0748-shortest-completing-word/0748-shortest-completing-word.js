/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    let word = licensePlate.match(/[a-zA-Z]+/g).join("").toLowerCase();
    const wordFreq = word.split("").reduce((acc,cur)=>{
        acc[cur] = (acc[cur] || 0)+1;
        return acc;
    },{});
    let result = ""
    for(let word of words){
        let str = word.split("").reduce((acc,cur)=>{
            acc[cur] = (acc[cur] || 0)+1;
            return acc;
        },{});

        let valid = true;

        for(let ch in wordFreq){ 
            if((str[ch] || 0) < wordFreq[ch]){
                valid = false;
                break;
            }
        }
        if(valid && (result === "" || word.length < result.length)){
            result = word
        }
    }
    return result;
};