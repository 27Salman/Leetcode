/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let str = [];
    let sort = s.split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0));
    let freq = sort.reduce((acc,cur)=> {
        acc[cur] = (acc[cur]||0)+1;
        return acc;
    },{});
    const keys = Object.keys(freq).reverse();
    while(str.length<s.length){
        for(let n in freq){
            if(freq[n]>0){
                str.push(n);
                freq[n]--;
            }
        }
        for (let n of keys) {
             if(freq[n]>0){
                str.push(n);
                freq[n]--;
            }
        }
    }
    return str.join("")
};