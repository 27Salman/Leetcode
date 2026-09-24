/**
 * @param {string} s
 * @return {number}
 */
var firstMatchingIndex = function(s) {
    let num = -1;
    let left = 0;
    let right = s.length-1;

    while(left <= right){
        if(s[left]===s[right]){
            num = left
            break;
        }
        left++;
        right--;
    }
    return num;
};