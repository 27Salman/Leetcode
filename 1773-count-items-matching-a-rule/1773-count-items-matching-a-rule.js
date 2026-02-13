/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let index = {type:0,color:1,name:2};
    let i = index[ruleKey];
    return items.filter(item => item[i] === ruleValue).length;
};