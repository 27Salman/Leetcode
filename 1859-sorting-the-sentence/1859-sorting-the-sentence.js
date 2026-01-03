/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    var array=s.split(' ').sort((a,b)=>a[a.length-1]-b[b.length-1])
    result=array.join().replace(/\d+/g,'')
    return output=result.split(',').join(' ')
};