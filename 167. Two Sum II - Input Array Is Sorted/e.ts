function twoSum(numbers: number[], target: number): number[] {
    let right: number = numbers.length -1;
    let left = 0;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left+1,right+1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};