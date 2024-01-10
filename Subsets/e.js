var subsets = function(nums) {
    let subsets = [[]]
    for (let index = 0; index < nums.length; index++) {
        const number1 = nums[index]
        let lenghtS = subsets.length
       for (let index2 = 0; index2 < lenghtS; index2++) {
        const copy = [...subsets[index2]];
        copy.push(number1);
        subsets.push(copy);
       }

    }
    return subsets;
};
console.log(subsets([0]));