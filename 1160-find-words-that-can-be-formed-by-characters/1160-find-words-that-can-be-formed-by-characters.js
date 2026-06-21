/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const count = new Int32Array(26);
    const deduct = 'a'.charCodeAt(0);

    for(let i = 0; i<chars.length; i++){
        count[chars.charCodeAt(i) - deduct]++;
    }

    let totalLength = 0;

    for(const word of words){
        const wordCount = new Int32Array(26);
        let flag = true;

        for(let i = 0; i<word.length; i++){
            const num = word.charCodeAt(i) - deduct;
            wordCount[num]++;

            if(wordCount[num] > count[num]){
                flag = false;
                break;
            }
        }

        if(flag) totalLength += word.length;

    }return totalLength;
};