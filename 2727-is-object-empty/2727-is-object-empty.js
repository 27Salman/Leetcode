/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (obj === null || typeof obj !== 'object') {
        return false; 
    }
  return Object.keys(obj).length === 0;
};