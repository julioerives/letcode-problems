class Solution(object):
    def thirdMax(self, nums):
        nums_unique = list(set(nums)) 
        
        nums_unique = sorted(nums_unique, reverse=True)


        if len(nums_unique) < 3:
            return max(nums_unique)
        else:
            return nums_unique[2]

response = Solution()
print(response.thirdMax([3,2,1]))