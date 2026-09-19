/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0;
    let monday = 1;
    let daily = 1;

    for (let day = 1; day <= n; day++) {
        total += daily;
        daily++;
        if (day % 7 === 0) {
            monday++;
            daily = monday;
        }
    }

    return total;
};