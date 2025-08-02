/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- No interface.
- It'll be executed in the console.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be a string.

What’s the desired output?

- The output will be the same string but with all characters in reverse order.
e.g. reverseString('hello there') // returns 'ereht olleh'

Given your inputs, what are the steps necessary to return the desired output?

- Write a function that takes one argument `string`
- Inside the function:
- Turn `string` into an array where each item is a character from the string 
using the `.split(``)` method.
- Use the `.reverse()` method to reverse the order of the array items.
- join the array back to a string together using the `.join()` method.



Pseudocode:

Function reverseString(string)
Set string to be split by .split(``) -> reversed by .reverse() 
-> joined back together by .join(` `)
return string

*/

// Do not edit below this line
//module.exports = repeatString;
