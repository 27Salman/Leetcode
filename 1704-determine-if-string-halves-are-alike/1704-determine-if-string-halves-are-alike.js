/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vowels = 'aeiou'
    let str = s.toLowerCase();
    let n = str.length/2;
    let a = str.slice(0,n);
    let b = str.slice(n);
    let countA = 0;
    let countB = 0;
    for(let i=0;i<b.length;i++){
         if(vowels.includes(b[i])) countB++
         if(vowels.includes(a[i])) countA++
    }
    return countA==countB
};