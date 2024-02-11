var isPerfectSquare = function(num) {
    let raiz = Math.sqrt(num);
    return raiz % 1 ===0
};
console.log(isPerfectSquare(15))