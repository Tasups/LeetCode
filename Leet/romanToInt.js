/*

13. Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

 

Example 1:

Input: s = "III"
Output: 3
Explanation: III = 3.
Example 2:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999].

*/
/**
 * @param {string} s
 * @return {number}
 */
 
function romanToInt (s) {

  let total = 0;

  for (let i = 0; i <  s.length; i++) {
    let trip = false;
    if (s[i] == "I" && s[i + 1] == "V") {
      total += 4;
      i++;
      trip = true;
      console.log("IV to 4: " + i);
    } else if (s[i] == "I" && s[i + 1] == "X") {
      total += 9;
      i++;
      trip = true;
      console.log("IX to 9: " + i);
    } else if (s[i] == "X" && s[i + 1] == "L") {
      total += 40;
      i++;
      trip = true;
      console.log("XL to 40: " + i);
    } else if (s[i] == "X" && s[i + 1] == "C") {
      total += 90;
      i++;
      trip = true;
      console.log("XC to 90: " + i);
    } else if (s[i] == "C" && s[i + 1] == "D") {
      total += 400;
      i++;
      trip = true;
      console.log("CD to 400: " + i);
    } else if (s[i] == "C" && s[i + 1] == "M") {
      total += 900;
      i++;
      trip = true;
      console.log("CM to 900: " + i);
    } 
    
    if (!trip) {
      switch (s[i]) {
      case 'I':
        total++;
        break;
      case 'V':
        total += 5;
        break;
      case 'X':
        total += 10;
        break;
      case 'L':
        total += 50;
        break;
      case 'C':
        total += 100;
        break;
      case 'D':
        total += 500;
        break;
      case 'M':
        total += 1000 ;
        break;
      default:
        break;
      }
    }
    
    trip = true;
    
  }
  console.log(total);
  return total;
    
};

// TEST CASES

// romanToInt("III") // -> Output: 3

// romanToInt("LVIII") // -> Output: 58

romanToInt("MCMXCIV") // -> Output: 1994
// romanToInt("M"); // works
// romanToInt("MC"); // works
// romanToInt("MCM");
