function getSum(a, b) {
    let example
   while (b !==0){
    example = a&b;
    a = a^b;
    b = example<<1;
   }
   return a;
}

console.log(getSum(5, 12));