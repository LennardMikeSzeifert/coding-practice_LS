/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- No interface.
- It'll be executed in the console.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be two arguments: the bottom limit number and the top limit number.

What’s the desired output?

- The output will be the sum of all numbers in between the bottom and top limit numbers including the limits.

Given your inputs, what are the steps necessary to return the desired output?

- Write a function that takes two arguments: the bottom limit number and the top limit number.
- Inside the function:
- Set the variable numbersArray to [].
- Create a loop that starts at the bottom limit number 
and increments that number with each iteration until it reaches the top limit number. 
With each iteration add that number to numbersArray using the `.push()` method.
- Set the variable arrayNumbersSum to numberArray.reduce((total, currentNumber) => total += currentNumber, bottomLimitNumber)
- return the total.


Pseudocode:

Function sumAll(bottomLimitNumber, topLimitNumber)
Set let numbersArray to []

FOR set i to bottomLimitNumber
End loop when i is greater than topLimitNumber
Increment i after each iteration
And unshift i to numbersArray
ENDFOR

Set the variable arrayNumbersSum to numbersArray.reduce((total, currentNumber) => total += currentNumber, bottomLimitNumber)
return arrayNumbersSum


*/

// My solution

function sumAll(bottomLimitNumber, topLimitNumber) {
  let numbersArray = [];
  for (let i = bottomLimitNumber; i <= topLimitNumber; i++) {
    numbersArray.unshift(i);
  }
  let arrayNumbersSum = numbersArray.reduce(
    (total, currentNumber) => (total += currentNumber),
    0
  );
  return arrayNumbersSum;
}

console.log(sumAll(1, 4));

// Oficial solution

const sumAll = function (min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
  // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
  // if (min > max) [min, max] = [max, min];

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
