/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
*/

var numberOfSteps = function (num) {
  let steps = 0;
  while (num > 0) {
    num % 2 === 0 ? (num = num / 2) : (num = num - 1);
    steps++;
  }
  return steps;
};

// TESTOVI

if (numberOfSteps(14) === 6) {
  console.log("Slučaj 1 - točan");
}

if (numberOfSteps(8) === 4) {
  console.log("Slučaj 2 - točan");
}

if (numberOfSteps(123) === 12) {
  console.log("Slučaj 3 - točan");
}
