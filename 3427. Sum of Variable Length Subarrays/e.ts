function subarraySum(nums: number[]): number {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const start = Math.max(0, index - nums[index]);
        sum += array(nums, start, index);
    }
    return sum;
};
function array(nums:number[],start:number,index:number):number{
    let result = 0;
    for (let i = start; i <= index; i++) {
        result += nums[i];
    }
    return result;
}