var maxSubArray = function(nums) {
    let i =0, record= -Infinity;
    for (let index = 0; index < nums.length; index++) {
        i+= nums[index];
        record = record > i ? record : i;
        i =  i<0 ? 0:i;
    }
    return record;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));