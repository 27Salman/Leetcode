/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    const seen = new Uint8Array(128); 
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        if (seen[charCode] === 0) {
            seen[charCode] = 1;
            count++;
        }
    }
    return count;
    
};