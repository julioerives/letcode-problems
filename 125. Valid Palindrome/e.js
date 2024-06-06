var isPalindrome = function(s) {
    const splitCharacters=/[,\];:[.@#`'?!(){}"\s_-]+/;

    const example = s.split("").reverse().join("").split(splitCharacters).join("").toLowerCase();
    const exampl2 = s.split("").join("").split(splitCharacters).join("").toLowerCase();
    console.log(exampl2);
    console.log(example);
    return example==exampl2
};
console.log(isPalindrome("A man, a plan, a canal: Panama"))