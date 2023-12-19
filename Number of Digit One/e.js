var countDigitOne = function(n) {
    let contador =0;
    if( n<=0) return 0;
    for (let index = 1; index <= n; index*=10) {
        let divisor = index*10;
        contador += Math.floor(n /divisor)*index;
        contador += Math.min(Math.max((n%divisor) - index + 1, 0), index);
    }
    return contador;
};
console.log(countDigitOne(13));