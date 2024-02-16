var replaceWords = function(dictionary, sentence) {
    let sentenceExample = sentence.split(" ");
    for (let index = 0; index <sentenceExample.length; index++) {
        for (let index2 = 0; index2 < dictionary.length; index2++) {
            if(sentenceExample[index].substring(0, dictionary[index2].length) == dictionary[index2]){
                sentenceExample[index] = dictionary[index2];
            }
        }
    }
    return sentenceExample.join(" ");
};
console.log(replaceWords(["cat","bat","rat"],"the cattle was rattled by the battery"))