/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- No interface.
- It'll be executed in the console.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be a number reprsenting the year to be checked as a leapYear.

What’s the desired output?

- The output will be a Boolean either defining if the year is a leap year or not.

Given your inputs, what are the steps necessary to return the desired output?

- Write a function that takes one argument: a number defining the year to be checked
- Inside the function:
- If the input is not a number return error
 - If the number if divided by 4 returns a rest of 0 
AND the number if divided by 100 returns a rest greater than 0 AND the number if divided by 400 returns a rest of 0
-> return true
- else return false

Pseudocode:

Function isLeapYear(year)
IF year is not a number OR a negative number return `Error! Please enter a number greater than 0!`
ELSE IF year divided by 100 returns a rest of 0 AND year divided by 400 returns a rest of 0 return true
ELSE IF year divided by 100 returns a rest of 0 AND year divided by 400 returns a rest greater than 0 return false
ELSE 
IF year divided by 4 returns no rest return true
ESLE return false

*/

// My solution

// function isLeapYear(year) {
//   if (!Number.isInteger(year) || year < 0) {
//     return `Error! Please enter a number greater than 0!`;
//   }
//   // check if even century
//   else if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 !== 0) {
//     return false;
//   }
//   // if not check leap
//   else {
//     if (year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(isLeapYear(1000));

// Original task solution

function isLeapYear(year) {
  if (!Number.isInteger(year) || year < 0) {
    return "Error! Please enter a number greater than 0!";
  }

  const isYearDivisibleByFour = year % 4 === 0;
  const isCentury = year % 100 === 0;
  const isYearDivisibleByFourHundred = year % 400 === 0;

  return isYearDivisibleByFour && (!isCentury || isYearDivisibleByFourHundred);
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
