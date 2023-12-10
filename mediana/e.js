const array1 = [1,2,3,4,5],array2 =[6,7,8,9,10];
var mediana  = function (array1,array2){
    let arrayExample = [];
    arrayExample.push(...array1.map(numero=>{ return numero}));
    arrayExample.push(...array2.map(numero=>{ return numero}));
    arrayExample.sort((a,b)=> b-a);
    if (arrayExample.length %2==1){
        return arrayExample[Math.floor((arrayExample.length-1)/2)];
    }else{
        return (arrayExample[Math.floor((arrayExample.length-1)/2)] + (Math.floor(arrayExample[arrayExample.length/2])))/2
    }
}
console.log(mediana(array1,array2));