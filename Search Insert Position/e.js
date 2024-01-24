var searchInsert = function(nums, target) {
    let numsExample = nums;
    let indice = nums.indexOf(target);
    if(indice <=-1){
        numsExample.push(target);
        numsExample.sort((a, b) => a - b);
        return numsExample.indexOf(target)
    }
    else return indice;
};
console.log(searchInsert([1,3,5,6],2))