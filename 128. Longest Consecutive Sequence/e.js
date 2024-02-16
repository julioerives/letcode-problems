var longestConsecutive = function(nums) {
     if (nums.length === 0) {
        return 0;
    }
    let countExample = 1;
    let numsSet = new Set(nums);

    for (let index = 0; index < nums.length; index++) {
        let example = nums[index];
        if (!numsSet.has(example - 1)) {
            let record = 1;
            while (numsSet.has(example + 1)) {
                example++;
                record++;
            }
            countExample = Math.max(record, countExample);
        }
    }

    return countExample;
};
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]    ))