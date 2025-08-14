// Largest 3-Same-Digit number in string

var largestGoodInteger = function(num) {
    if(num.length<3) return "";
    let largest = "";
    for(let i = 0; i<num.length;i++){
        let sub = num.substring(i,i+3);
        if(sub[0]===sub[1] && sub[1]===sub[2]){
            if(largest === "" || Number(sub)>Number(largest)){
                largest = sub;
            }
        }
    }return largest;
};

console.log(largestGoodInteger("22333456777"));