//Remove Duplicates from Sorted Array(Modify the original array)

var removeDuplicates = nums => {
    const unique = [...new Set(nums)];
    nums.splice(0, nums.length, ...unique);
    return nums.length;
  };

