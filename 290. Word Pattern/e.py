class Solution(object):
    def wordPattern(self, pattern, s):
        lettersExample = list(dict.fromkeys(pattern))
        wordExample = s.split()
        wordExample = list(dict.fromkeys(wordExample))
        if len(lettersExample) != len(set(wordExample)): return False
        for i in range(len(s.split())):
            if( wordExample.index(s[i].split() ) != lettersExample[wordExample.index(s[i].split() )]): return False
            
        return True
    
result = Solution()
print(result.wordPattern("abba","dog cat cat dog"))