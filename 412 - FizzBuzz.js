/* 
Given an integer n, return a string array answer (1-indexed) where:

    answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    answer[i] == "Fizz" if i is divisible by 3.
    answer[i] == "Buzz" if i is divisible by 5.
    answer[i] == i (as a string) if none of the above conditions are true.
 */

var fizzBuzz = function (n) {
  let array = [];
  for (i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i.toString());
    }
  }

  return array;
};

// TESTOVI

const checkArray = [
  "1",
  "2",
  "Fizz",
  "3",
  "Buzz",
  "Fizz",
  "7",
  "8",
  "Fizz",
  "Buzz",
  "11",
  "Fizz",
  "13",
  "14",
  "FizzBuzz",
];

fizzBuzz(15).forEach((i, a) => {
  if (fizzBuzz(15)[i] === checkArray[i]) {
    console.log(`Index ${a} (${i}) točan!`);
  } else if (fizzBuzz(15)[i] !== checkArray[i]) {
    console.log(`Index ${a} (${i} netočan!)`);
  }
});
