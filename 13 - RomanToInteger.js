/* 

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

*/

var romanToInt = function (s) {
  const niz = s.split("");
  let rezultat = 0;
  niz.forEach((broj, i) => {
    // kombinacije sa I
    if (broj === "I" && niz[i + 1] === "V") {
      niz.splice(i, 2, 4);
    } else if (broj === "I" && niz[i + 1] === "X") {
      niz.splice(i, 2, 9);
    } else if (broj === "I") {
      niz[i] = 1;
    }
    // kombinacije sa V
    if (broj === "V") {
      niz[i] = 5;
    }

    // kombinacije sa X
    if (broj === "X" && niz[i + 1] === "L") {
      niz.splice(i, 2, 40);
    } else if (broj === "X" && niz[i + 1] === "C") {
      niz.splice(i, 2, 90);
    } else if (broj === "X") {
      niz[i] = 10;
    }
    // kombinacije sa L
    if (broj === "L") {
      niz[i] = 50;
    }
    // kombinacije sa C
    if (broj === "C" && niz[i + 1] === "D") {
      niz.splice(i, 2, 400);
    } else if (broj === "C" && niz[i + 1] === "M") {
      niz.splice(i, 2, 900);
    } else if (broj === "C") {
      niz[i] = 100;
    }
    // kombinacije sa D
    if (broj === "D") {
      niz[i] = 500;
    }
    // kombinacije sa M
    if (broj === "M") {
      niz[i] = 1000;
    }
  });
  rezultat = niz.reduce((x, y) => x + y, 0);
  console.log(rezultat);
  return rezultat;
};
// TESTOVI

if (romanToInt("I") === 1) {
  console.log("Test case 1 - uspješan");
}

if (romanToInt("IV") === 4) {
  console.log("Test case 2 - uspješan");
}

if (romanToInt("LVIII") === 58) {
  console.log("Test case 3 - uspješan");
}

if (romanToInt("MCMXCIV") === 1994) {
  console.log("Test case 4 - uspješan");
}
