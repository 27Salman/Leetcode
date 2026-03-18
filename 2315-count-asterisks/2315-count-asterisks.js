/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let str = s.split("|");
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(i%2===0){
            let n = str[i].split("").filter(a=>a==="*").length;
            count += n;
        }
    }return count;
};