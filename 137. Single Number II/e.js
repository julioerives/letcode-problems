var singleNumber = function(nums) {
    const objectNums ={}
    for (let i = 0; i < nums.length; i++){
        if(objectNums[nums[i]]!= undefined)objectNums[nums[i]]++;
        else objectNums[nums[i]]=1
    }
    min = Infinity
    keyReturn = null
    for (const key in objectNums) {
        if(objectNums[key]< min){
            min = objectNums[key]
            keyReturn = key
        }
    }
    return keyReturn
};
// console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([30000,500,100,30000,100,30000,100]))