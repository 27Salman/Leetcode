/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    
    const countBits = (n) => {
        let count = 0;
        while (n > 0) {
            n &= (n - 1); // Clears the lowest set bit
            count++;
        }
        return count;
    };

    return arr.sort((a,b)=>{
        let bitsA = countBits(a)
        let bitsB = countBits(b)
        return bitsA !== bitsB ? bitsA - bitsB : a-b;
    })
};