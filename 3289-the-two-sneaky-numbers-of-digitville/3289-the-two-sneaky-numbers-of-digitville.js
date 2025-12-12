/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    return nums.filter((val,index)=>nums.indexOf(val)!==index);
    // let num = nums.reduce((acc,cur)=>{
    //     acc[cur] = (acc[cur]||0) +1;
    //     return acc;
    // },{});
    // for(let nums in num){
    //     if(num[nums]>1) arr.push(Number(nums));
    // }return arr;
};