var firstMissingPositive = function(nums) {
    if(nums.length <2 && nums[0]<1) return 1;
    const numPositive =nums.filter(n =>n>0).sort((a,b)=>a -b);
    if(numPositive.length<1 ) return 1
    let num =1;
    let index = 0;
    let bandera = true;
    while (bandera) {

        if(numPositive[index]  > num){
            bandera= false;
            break;
        }
        if(index >= numPositive.length-1){
            num = numPositive[numPositive.length-1]+1;
            break;
        }
        num = numPositive[index]+1;
        index++;

    }

    return num;


};
console.log(firstMissingPositive([-1,-2]));
