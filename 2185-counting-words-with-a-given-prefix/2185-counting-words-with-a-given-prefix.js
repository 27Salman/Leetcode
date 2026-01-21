/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    // let count = 0;
    // for(let str of words){
    //     if(str.startsWith(pref)) count++;
    // }
    // return count;

    //....One line code....
    return words.filter(word => word.startsWith(pref)).length;

    // ....Beginner code....
    // let count = 0;
    // for(let str of words){
    //     let flag = false;
    //     for(let i = 0; i<pref.length; i++){
    //         if(str[i]===pref[i]){
    //             flag = true;
    //             continue;
    //         }else{
    //             flag = false;
    //             break;
    //         }
    //     }
    //     if(flag){
    //         count++;
    //     }
    // }return count;
};