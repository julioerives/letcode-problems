var reverse = function(x) {
    let cadena =parseInt(x.toString().split('').reverse().join(''));
    if(cadena < -2147483648 || cadena > 2147483647) {
        return 0
    }
    if(x<0) return cadena * -1;
    return cadena;
    
};
console.log(reverse(1534236469));