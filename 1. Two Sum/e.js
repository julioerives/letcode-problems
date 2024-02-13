
var twoSum = function(nums, target){
    for (let index = 0; index < nums.length; index++) {
        for (let index2 = 0; index2 < nums.length; index2++) {
           if((nums[index]+ nums[index2]== target)&& index!= index2){
            return [index,index2];
           }
        }
    }
}
console.log(twoSum([3,2,4],6))