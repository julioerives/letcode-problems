const removeDuplicates = function(nums) {
    const numeros = new Set(nums);
    return numeros.size;
};
console.log(removeDuplicates([1,2,1,2,3,4,5,2])); 