/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0;
    let mondayMoney = 1;
    let dailyMoney = 1;

    for (let day = 1; day <= n; day++) {
        total += dailyMoney;
        dailyMoney++;
        if (day % 7 === 0) {
            mondayMoney++;
            dailyMoney = mondayMoney;
        }
    }

    return total;
};