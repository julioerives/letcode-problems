const number = 101;
const isPalindrome = (number)=>{
    let numbeConvertido = number.toString();
    return numbeConvertido === numbeConvertido.split('').reverse().join('');
}
console.log(isPalindrome(number));
