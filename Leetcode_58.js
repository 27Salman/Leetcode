// Length of last word
var lengthOfLastWord = function(s){
    const a = s.trim().split(" ");
    const n = a.length;
    return a[n-1].length;
};