/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.match(/[a-zA-Z]+/g).map(a => a.toLowerCase()).reduce((acc,cur)=>{
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    let result = 0;
    let answer = ""
    for(let word in words){
        if(banned.includes(word)) continue;
        if(words[word] > result){
            result = words[word];
            answer = word
        };

    };
    return answer;
};