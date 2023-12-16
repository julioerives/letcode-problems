var rotateRight = function(head, k) {
    if (head === null) return null;
    if (k === null) return null;
    let array2 = head,array =[];
    for (let index = 0; index < k; index++) {
        array = array2;
        array2 = [];
        array2.push(array[array.length - 1]);
        for (let index = 0; index < array.length-1; index++) {
            array2.push(array[index]);
        }
        
    }
    return array2;
};
console.log(rotateRight([1,2,3,4,5],2));