// under 10 minutes to understand the pb and do the solution

import java.util.*;
import java.io.*;
import java.math.*;

class Solution {

    public static void main(final String args[]) {
        final Scanner in = new Scanner(System.in);
        final int L = in.nextInt();
        final int H = in.nextInt();
        final List<String> alpha = new ArrayList<>();
        alpha.addAll(Arrays.asList("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
         "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"));
        if (in.hasNextLine()) {
            in.nextLine();
        }
        final String T = in.nextLine();
        final List charList = new ArrayList<>();

        for(final char c : T.toUpperCase().toCharArray()) {
            charList.add(String.valueOf(c));
        }
        for (int i = 0; i < H; i++) {
            final String ROW = in.nextLine();
            final List<String> rowList = new ArrayList<>();
            String limiter= "(?<=\\G";

            for(int h=0;h<=L;h++){
                if(h==L){
                    limiter = limiter + ")";
                }
                else {
                    limiter = limiter + ".";
                }
            }

            rowList.addAll(Arrays.asList(ROW.split(limiter)));
            StringJoiner finalList = new StringJoiner("");

            for(int j = 0; j < charList.size(); j++){
                if(alpha.indexOf(charList.get(j)) >=0){
                finalList.add(rowList.get(alpha.indexOf(charList.get(j))));
                }
                else{
                    finalList.add(rowList.get(rowList.size() - 1));
                }
            }
            System.out.println(finalList);

        }

    }
}
