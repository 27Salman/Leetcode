/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    for(let item of items){
        if(ruleKey === "type"){
            if(ruleValue === item[0]){
                count++;
            }
        }else if(ruleKey === "color"){
            if(ruleValue === item[1]){
                count++;
            }
        }else if(ruleKey === "name"){
            if(ruleValue === item[2]){
                count++;
            }
        }
    }return count;
};