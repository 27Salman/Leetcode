/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let result = 0;
    for(let i = 0; i<details.length; i++){
        let age = details[i].slice(11,13);
        if(age > 60) result += 1;
    }
    return result;
};