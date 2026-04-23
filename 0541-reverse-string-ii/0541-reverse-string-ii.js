/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let result = s.split(''); 
    for (let i = 0; i < result.length; i += 2 * k) {
        let reverse = result.slice(i, i + k).reverse();
        result.splice(i, k, ...reverse);
    }

    return result.join('');
};