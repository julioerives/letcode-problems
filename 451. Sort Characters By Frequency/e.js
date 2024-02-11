
var frequencySort = function(s) {
    const charCount = new Map();
    let exampleReturn = ""
    for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    const sortedCharCount = [...charCount.entries()].sort((a, b) => b[1] - a[1]);
    sortedCharCount.forEach(([char, count]) => {
    for (let index = 0; index < count; index++) {
         exampleReturn+= `${char}`;
        
    }
});
return exampleReturn;
};
console.log(frequencySort("tree"))