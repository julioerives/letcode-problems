var myPow = function(x, n) {
    let returnValue = 1;
    if (n === 0) return 1;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    for (let index = 0; index < n; index++) {
        returnValue *= x;
    }
    return returnValue;
};

console.log(myPow(2, -2));