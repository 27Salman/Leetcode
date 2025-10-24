// Split a string in balanced strings
var balancedStringSplit = function(s) {
    let first = 0;
    let second = 0;
    let final = 0;
    for(let i = 0; i<s.length; i++){
        if(s[i]==="L"){
            first++;
        }else if(s[i]==="R"){
            second++;
        }
        if(first === second){
            final++;
        }
    }return final;
};
console.log(balancedStringSplit("RLLRLLRRLRLL"));