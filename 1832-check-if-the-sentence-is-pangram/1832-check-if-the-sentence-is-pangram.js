/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let arr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let count = 0;
    let arr1=[];
    for(let i = 0; i<=sentence.length;i++){
        if(arr.includes(sentence[i]) && !arr1.includes(sentence[i])){
            arr1.push(sentence[i]);
            count++;
        }
    }
    console.log(count);
    return count===arr.length;
};