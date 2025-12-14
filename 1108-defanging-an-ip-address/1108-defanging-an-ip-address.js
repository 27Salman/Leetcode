/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
   // return address.split(".").join("[.]").toString();
   let num = address.split("")
   for(let i = 0 ; i<num.length; i++){
    if(num[i]==="."){
        num[i]="[.]"
    }
   }return num.join("");
};