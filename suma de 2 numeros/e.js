var array = [5,2,3,4,9];
function hola(array){
    for (let index = 0; index < array.length; index++) {
        for (let index2 = 0; index2 < array.length; index2++) {
           if((array[index]+ array[index2]==13)&& index!= index2){
            console.log("los indices son "+index+" y "+index2)
            return;
           }
        }
    }
    console.log("No hay numeros que hagan eso mi amigo")
}
hola(array);