/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let open = 0;
    let str = "";
    for(let i = 0; i<s.length; i++){
        if(s[i]=="("){
            if(open>0){
                str += s[i];
            }
            open++;
        }else{
            open--;
            if(open>0){
                str += s[i];
            }
        }
    }return str;
};