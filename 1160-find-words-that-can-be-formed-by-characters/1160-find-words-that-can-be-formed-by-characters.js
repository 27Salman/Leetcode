/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let freqChars = chars.split("").reduce((acc, cur)=>{
        acc[cur] = ( acc[cur] || 0 ) + 1;
        return acc;
    },{});

    let totalLength = 0;

    for(let word of words){

        let freqWord = word.split("").reduce((acc, cur)=>{
            acc[cur] = ( acc[cur] || 0 ) + 1;
            return acc;
        },{});

        let flag = true;

        for(let char in freqWord){
            if(!freqChars[char] || freqChars[char] < freqWord[char]){
                flag = false;
                break;
            }
        }

        if(flag) totalLength += word.length;

    }return totalLength;
};