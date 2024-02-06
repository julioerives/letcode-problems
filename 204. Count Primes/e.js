var countPrimes = function(n) {
    let numberExample=0;
    if ( n <=2) return 0;
    for (let index = 1; index < n; index++) {
        for (let index2 = 2; index2 < index; index2++) {
            if(index%index2==0 && index != index2){
                numberExample++;
                break;
            }
            
        }
    }
    return n-numberExample-2;
};
console.log(countPrimes(20))