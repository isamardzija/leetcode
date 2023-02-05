/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth. 
*/

var maximumWealth = function (accounts) {
  let result = 0;
  accounts.forEach((acc) => {
    const accSum = acc.reduce((x, y) => x + y, 0);
    if (accSum > result) {
      result = accSum;
    }
  });

  return result;
};

// TESTOVI
if (
  maximumWealth([
    [1, 2],
    [2, 3],
    [1, 3],
  ]) === 5
) {
  console.log("Slučaj 1 - uspjeh!");
}

if (
  maximumWealth([
    [1, 2],
    [2, 3],
    [3, 2],
  ]) === 5
) {
  console.log("Slučaj 2 - uspjeh!");
}

if (
  maximumWealth([
    [134, 26, 50],
    [222, 78],
  ]) === 300
) {
  console.log("Slučaj 3 - uspjeh!");
}

if (
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ]) === 17
) {
  console.log("Slučaj 4 - uspjeh!");
}

if (
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ]) === 10
) {
  console.log("Slučaj 5 - uspjeh!");
}
