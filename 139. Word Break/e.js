var wordBreak = function(s, wordDict) {
    let bool = true;
    let cadena = s;
    for (let index = 0; index < wordDict.length; index++) {
        const variable =  cadena.split(wordDict[index])
        if(variable[0] == cadena){
         bool = false;
         break;
        }
        cadena =s.replace(wordDict[index],"")
    }
    return bool
};
console.log(wordBreak("bb",["a","b","bbb","bbbb"]))