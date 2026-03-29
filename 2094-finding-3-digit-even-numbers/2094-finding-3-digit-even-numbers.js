/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    const result = [];
    
    const count = new Array(10).fill(0);
    for (const d of digits) {
        count[d]++;
    }
    
    for (let i = 100; i <= 998; i += 2) {
        let d1 = Math.floor(i / 100);       
        let d2 = Math.floor((i / 10) % 10); 
        let d3 = i % 10;                    
        
        
        count[d1]--;
        count[d2]--;
        count[d3]--;
        
        if (count[d1] >= 0 && count[d2] >= 0 && count[d3] >= 0) {
            result.push(i);
        }
        
        count[d1]++;
        count[d2]++;
        count[d3]++;
    }
    
    return result;
};