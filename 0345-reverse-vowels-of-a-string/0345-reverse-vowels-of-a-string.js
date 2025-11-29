/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let start = 0;
    let end = s.length-1;
    let str = s.split("")
    while(start<end){
        if(!vowels.includes(str[start])){
            start++;
        }else if(!vowels.includes(str[end])){
            end--
        }else{
            [str[start],str[end]] = [str[end],str[start]];
            start++;
            end--;
        }
    }return str.join("");
};