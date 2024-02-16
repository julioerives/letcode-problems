var findDisappearedNumbers = function(nums) {
    let arrayExample = [];
    let numSet = new Set(nums);

    for (let count = 1; count <= nums.length; count++) {
        if (!numSet.has(count)) {
            arrayExample.push(count);
        }
    }

    return arrayExample;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));