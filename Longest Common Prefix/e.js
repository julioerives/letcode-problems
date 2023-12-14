var longestCommonPrefix = function(strs) {
    if (strs.length <= 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < prefix.length; j++) {
            if (prefix[j] !== strs[i][j]) {
                prefix = prefix.substring(0, j);
                break;
            }
        }
        if (prefix === "") return "";
    }

    return prefix;
};

console.log(longestCommonPrefix(["cir","car"]))