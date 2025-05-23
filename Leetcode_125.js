//Valid Palindrome
var isPalindrome = function(s) {
    const newLower = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
    return newLower === newLower.split("").reverse().join("");
};