/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- No interface.
- Will be completely in the console.


What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be a string and a number to define how often the string will be repeated for.

What’s the desired output?

- A new string including the provided string repeated the number of times defined with the number.


Given your inputs, what are the steps necessary to return the desired output?

- Write a function with two arguments (string, number)
- Write a loop that adds the string as many times as the number defines
- Return the added up string

Pseudocode:

Function repeatString(inputString, inputNumber)
  Set resultString to empty string
  For i from 0 to inputNumber (exclusive)
    Add inputString to resultString
  End For
  Return resultString


*/

function repeatString(inputString, inputNumber) {
  let resultString = ``;
  for (let i = 0; i < inputNumber; i++) {
    resultString += inputString;
  }
  return resultString;
}
console.log(repeatString(`hey`, 3));

// Do not edit below this line
//module.exports = repeatString;
