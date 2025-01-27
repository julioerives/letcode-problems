function shortestPalindrome(s: string): string {
    let sReversed = s.split("").reverse().join("");
    let letter = 0;
    while(letter < s.length){
        if (s.startsWith(sReversed.substring(letter))) {
            break;
        }
        letter++;
    }
    return sReversed.substring(0, letter) + s
};
function shortestPalindrome2(s: string): string {
    let reversed = s.split("").reverse().join("");
    let n = s.length;
    for (let i = 0; i < n; i++) {
        if (s.startsWith(reversed.substring(i))) {
            return reversed.substring(0, i) + s;
        }
    }

    return s;
}