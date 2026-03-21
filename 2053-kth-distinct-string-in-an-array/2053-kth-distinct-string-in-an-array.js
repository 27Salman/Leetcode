/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let s = arr.filter((a)=>arr.indexOf(a)===arr.lastIndexOf(a));
    return k>s.length ? "":s[k-1];
};