// find Words Containing Character

var findWordsContaining = function(words, x) {
    let arr = [];
    let n = words.length;
    for(let i = 0; i<n;i++){
        if(words[i].includes(x)) arr.push(i);
    }return arr;
};

let w = ["leet","code"];
let y = "e";

console.log(findWordsContaining(w,y));