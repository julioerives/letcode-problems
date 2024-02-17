class Solution(object):
    def majorityElement(self, nums):
        arrayExample = set(nums)
        arrayExample = list(arrayExample)
        example =0
        returnNumber =0
        for i in range(len(arrayExample)):
            if(example < nums.count(arrayExample[i])):
             example = max(example, nums.count(arrayExample[i]))
             returnNumber =arrayExample[i]
        return returnNumber

response = Solution()
print(response.majorityElement([3,2,3]))