//Largest Odd Number in String

var largestOddNumber = function(num) {
    for(let i=num.length-1;i>=0;i--){
        if((num.charCodeAt(i)-48)%2==1){
            return num.slice(0,i+1);
        }
    }return "";
};