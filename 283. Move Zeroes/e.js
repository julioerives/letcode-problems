var moveZeroes = function(nums) {
    let numsExample =nums
    let count=0
    for (let index = 0; index < numsExample.length; index++) {
        if(numsExample[index]== 0){
            numsExample.splice(index,1);
            index =index-1
            count++;
        }
        
    }
    for (let index = 0; index < count; index++) {
        numsExample.push(0)
    }
    return numsExample
};
console.log(moveZeroes([0,0,1]))