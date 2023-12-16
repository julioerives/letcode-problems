var lengthOfLastWord = function(s) {
    let word=0, wordExample = s.trim();
    for (let index = 0; index < wordExample.length; index++) {
        if(wordExample[index] ===" ") word = 0;
        else word ++;
        
    }
    return word;
};
console.log(lengthOfLastWord("a"));