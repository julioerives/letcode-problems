var reverseWords = function(s) {
    let cadenaExample =s.trim().split(/\s+/);
    let newCadena="";
    for (let index = cadenaExample.length-1; index>=0; index--) {
        newCadena += `${cadenaExample[index]} `;
    }
    return newCadena.trim();

};

console.log(reverseWords("a good   example"));