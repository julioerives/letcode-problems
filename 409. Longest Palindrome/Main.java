
public class Main {
    public static void main(String[] args) {
        
    }

    public int longestPalindrome(String s) {
        int[] freq = new int[128];
        int count = 0;
        for (char i : s.toCharArray()) {
            freq[i] ++;
        }

        for (int iterable_element : freq) {
            if(iterable_element % 2 == 0 ){
                count+= iterable_element;
            }else {
                count += iterable_element -1;
            }
        }

        if(count < s.length()){
            count ++;
        }

        return count;

    }
}
