public class Main {
    public static void main(String[] args) {
        
    }
    public boolean isPowerOfTwo(int n) {
        if(n == 1) return true;
        if( n == 0 ) return false;
        while(n %2 == 0){
            n /=2;
        }
        return n ==1;
    }
}
