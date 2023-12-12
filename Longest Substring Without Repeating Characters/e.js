const lengthOfLongestSubstring = (s) => {
    let longestLength = 0;
    let start = 0;
    const seen = new Set();
  
    for (let end = 0; end < s.length; end++) {
      while (seen.has(s[end])) {
        seen.delete(s[start]);
        start++;
      }
      seen.add(s[end]);
      longestLength = Math.max(longestLength, end - start + 1);
    }
  
    return longestLength;
  };
  
  console.log(lengthOfLongestSubstring("dvdf")); 