// Palindrome Number

var isPalindrome = function(x){
    const str = x.toString();
    const newString = str.split("").reverse().join("");
    return str == newString;
};
