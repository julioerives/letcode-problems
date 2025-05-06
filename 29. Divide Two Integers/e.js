var divide = function(dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647
    if(dividend == 0 | divisor == 0) return 0
    let dividiendo = Math.abs(dividend);
    let divisorA = Math.abs(divisor);
    if(divisorA > dividiendo) return 0;
    const divisorExample = Math.abs(divisor);
    let count =0;
   
    let negativo = (dividend < 0) !== (divisor < 0);
    if(divisorA == dividiendo) return negativo ? -1:1;

    if(divisorA ==1) return divisor < 0 && dividend < 0 ? -dividend: dividend <0 &&divisor > 0? dividend: dividend > 0 && divisor < 0 ?-dividend:dividend
        while(divisorA <= dividiendo){
            divisorA+= divisorExample
            dividiendo-=divisorExample;
            count+=2;
            // count++;
        }
        // count = (divisorA-dividiendo) %2 ==0   ? count*=2:(count*=2)-1;
    return negativo ? -count : count;
    // return parseInt(dividend/divisor) > 2147483647?  2147483647:  parseInt(dividend/divisor)
    
    
};
console.log(new Date().getMilliseconds())
console.log(divide(2147483647,2));
// console.log(divide(21,4));
console.log(new Date().getMilliseconds())

