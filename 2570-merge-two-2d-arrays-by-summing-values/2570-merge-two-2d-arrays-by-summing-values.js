/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0, j = 0;
    let arr = [];
    while( i < nums1.length && j < nums2.length){
        if(nums1[i][0] === nums2[j][0]){
            arr.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++;
            j++;
        }else if(nums1[i][0] < nums2[j][0]){
            arr.push(nums1[i]);
            i++;
        }else{
            arr.push(nums2[j]);
            j++;
        }
    }
        while (i < nums1.length) {
            arr.push(nums1[i]);
            i++;
        }

        while (j < nums2.length) {
            arr.push(nums2[j]);
            j++;
        }
    return arr
};