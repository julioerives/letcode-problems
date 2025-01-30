class Solution {
    public boolean isArraySpecial(int[] nums) {
        if(nums.length < 2) return true;
        for (int i = 0; i < nums.length-1; i++){

            if(nums[i] %2 == 0 && (nums[i + 1]+1) %2 == 0){
                continue;
            }
            if(nums[i] %2 == 1 && (nums[i+1]+1) %2 == 1){
                continue;
            }
            return false;
        }
        return true;
    }
}