/*

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral.

Constraints:

1 <= num <= 3999

*/

function intToRoman(num) {
    const str = num.toString();
    let result = [];
    for (let i = str.length; i > 0; i--) {
            if (str.length === 4) {
                if (i === 0) {
                    let num = parseInt(str[i], 10) * "M"
                    result.push(num);
                } else if (i === 1) {
                    if (str[i] === 9) {
                        result.push("CM");
                    } else if (str[i] === 8) {
                        result.push("DCCC");
                    } else if (str[i] === 7) {
                        result.push("DCC");
                    } else if (str[i] === 6) {
                        result.push("DC");
                    } else if (str[i] === 5) {
                        result.push("D");
                    } else if (str[i] === 4) {
                        result.push("CD");
                    } else {
                        let num = parseInt(str[i], 10) * "C";
                        result.push(num);
                    } 
                } else if (i === 2) {
                    if (str[i] === 9) {
                        result.push("XC");
                    } else if (str[i] === 8) {
                        result.push("LXXX");
                    } else if (str[i] === 7) {
                        result.push("LXX");
                    } else if (str[i] === 6) {
                        result.push("LX");
                    } else if (str[i] === 5) {
                        result.push("L");
                    } else if (str[i] === 4) {
                        result.push("XL");
                    } else {
                        let num = parseInt(str[i], 10) * "X";
                        result.push(num);
                    } 
                } else if (i === 3) {
                    if (str[i] === 9) {
                        result.push("IX");
                    } else if (str[i] === 8) {
                        result.push("VIII");
                    } else if (str[i] === 7) {
                        result.push("VII");
                    } else if (str[i] === 6) {
                        result.push("VI");
                    } else if (str[i] === 5) {
                        result.push("V");
                    } else if (str[i] === 4) {
                        result.push("IV");
                    } else {
                        let num = parseInt(str[i], 10) * "I";
                        result.push(num);
                    } 
                }
            }
        }
    console.log(result);
    return result;
}

intToRoman(3); // -> III
intToRoman(58); // -> LVIII
intToRoman(1994); // -> MCMXCIV

