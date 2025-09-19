// count the number of vowel String in range
var vowelStrings = function(words, left, right) {
    let count = 0;
    const vowels = ["a","e","i","o","u"];
    while(left<=right){
        let w = words[left];
        if(vowels.includes(w[0]) && vowels.includes(w[w.length-1])) count++;
        left++;
    }return count;
};

let word = ["are","amy","u"];
let leftRange = 0;
let rightRange = 2;

console.log(vowelStrings(word, leftRange, rightRange));