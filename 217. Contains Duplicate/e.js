var containsDuplicate = function(nums) {
    const example = new Set(nums);
    return example.size < nums.length ? true: false;
};
console.log(containsDuplicate([1,2,3,1]))