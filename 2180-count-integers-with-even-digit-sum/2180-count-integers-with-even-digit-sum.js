/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    
    for (let i = 1; i <= num; i++) {
        let current = i;
        let digitSum = 0;
        
        while (current > 0) {
            digitSum += current % 10;
            current = Math.floor(current / 10);
        }
        
        if (digitSum % 2 === 0) {
            count++;
        }
    }
    
    return count;
};