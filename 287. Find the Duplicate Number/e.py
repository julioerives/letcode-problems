class Solution(object):
    def findDuplicate(self, nums):
        exampleNums = nums
        exampleNums = sorted(exampleNums)
        for i in range(len(exampleNums)-1):
            if(exampleNums[i] == exampleNums[i+1]):
                return exampleNums[i]
            

response  = Solution()
print(response.findDuplicate([1,3,4,2,2]))