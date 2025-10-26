// Detect Capital
var detectCapitalUse = function(word) {
    if(word === word.toUpperCase() || word === word.toLowerCase() || word === word[0].toUpperCase() + word.slice(1).toLowerCase()){
        return true;
    }else{
        return false;
    }
};
console.log(detectCapitalUse("FlaG"));