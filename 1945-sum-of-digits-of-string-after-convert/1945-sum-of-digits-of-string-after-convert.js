var getLucky = function(s, k) {
    let numStr = "";
    for (let char of s) {
        numStr += (char.charCodeAt(0) - 96).toString();
    }
    while (k > 0) {
        let sum = 0;
        for (let digit of numStr) {
            sum += Number(digit);
        }
        numStr = sum.toString(); 
        k--;
    }
    return Number(numStr);
};
