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
    console.log(cadena)
    return bool
};
console.log(wordBreak("applepenapple",["apple","pen"]))