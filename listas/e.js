const array1 = [[3,2,1],[4, 5, 6],[7, 8, 9]];
var mergeKLists = function(array1) {
    let arrayExample =[];
    array1.forEach(element => {
        arrayExample.push(...element.map(elemento2=>elemento2));
    });
    return arrayExample.sort((a,b)=> a-b);
};
console.log(mergeKLists(array1));