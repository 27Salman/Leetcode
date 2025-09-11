// Sort Vowels in a string
var sortVowels = function (s) {
    let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U",];
    let vowels = [];
    
    for (let i = 0; i < s.length; i++) {
        if(arr.includes(s[i])){
            vowels.push(s[i]);  
        }
    } 
    vowels.sort((a,b)=>a.charCodeAt(0) - b.charCodeAt(0)); 

    let idx = 0;
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (arr.includes(s[i])) {
            res += vowels[idx];
            idx++;
        } else {
            res += s[i];
        }
    }
    return res;
};
let str = "LEetcOde"
console.log(sortVowels(str));