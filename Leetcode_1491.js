//Average Salary Excluding the Minimum and Maximum Salary
var average = function(salary) {
    let avrg = 0;
    let n = salary.length-2;
    const newMax = salary.sort((a,b) => a-b);
    for(let i=1;i<salary.length-1;i++){
            avrg = avrg+salary[i];
    }
    avrg=avrg/n;
    return avrg;
};