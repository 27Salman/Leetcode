/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var findClosest = function(x, y, z) {
    let p1 = Math.abs(z-y);
    let p2 = Math.abs(z-x);
    if(p2>p1){
        return 2;
    }else if(p2<p1){
        return 1;
    }else{
        return 0;
    }

};