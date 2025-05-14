//Remove Elements
var removeElement = function(nums, val) {
    let n = nums.length;
    let a=0;
    for(let i=0;i<n;i++){
        if(nums[i]!==val){
            nums[a]=nums[i];
            a++;
        }
    }
    return a;
};