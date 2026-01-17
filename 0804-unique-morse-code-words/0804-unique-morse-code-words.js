/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let transfer = new Set();

    for(let s of words){
        let con = "";
        for(let i = 0; i<s.length; i++){
            let index = s.charCodeAt(i)-97;
            con += morse[index];
        }
        transfer.add(con);
    }return transfer.size;

};