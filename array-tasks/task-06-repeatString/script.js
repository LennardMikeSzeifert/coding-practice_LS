/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- no interface.
- will be completely in the console.


What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- the input will be a string and a number to define how often the string will be repeated for.

What’s the desired output?

- a new string including the provided string repeated the number of times defined with the number.


Given your inputs, what are the steps necessary to return the desired output?

- write a function with two arguments (string, number)
- wrtite a loop that adds the string as many times as the number defines
- return the added up string

Pseudocode:

function with arguments inputString and inputNumber
define varibale let resultString as empty string
FOR i is 0, i is smaller than inputNumber, increment i
resultString +=  inputString
ENDFOR
return resultString


*/

function repeatString(inputString, inputNumber) {
  let resultString = ``;
  for (let i = 0; i < inputNumber; i++) {
    resultString += inputString;
  }
  return resultString;
}
console.log(repeatString(`hello`, 10));

// Do not edit below this line
//module.exports = repeatString;
