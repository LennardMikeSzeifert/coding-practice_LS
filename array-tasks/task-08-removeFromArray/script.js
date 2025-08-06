/*

Planning: 

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.

- No interface.
- It'll be executed in the console.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?

- The input will be two arguments: an array and a second argument which will define which value should be deleted 
from the original array.

What’s the desired output?

- The output will be the given array but the array item defined with the value from the second argument 
will be deleted from the array.

Given your inputs, what are the steps necessary to return the desired output?

- Write a function that takes two arguments: an array which will be modified and a value that also appears as an array item.
- Inside the function:
- Use the `.findIndex()` method to find the index of the given value in the array.
- Use the `.splice` method to delete the array item at the found index.
- return the new array.


Pseudocode:

Function removeFromArray(arr, itemToDelete)
Set indexToDelete to arr.findIndex(item => item === itemToDelete)
return array using `.splice(indexToDelete, 1)` method 

*/

// My original solution (missing support for multiple items to delete and edge case handling)

// function removeFromArray(arr, itemToDelete) {
//   arr.splice(
//     arr.findIndex((item) => item === itemToDelete),
//     1
//   );
//   return arr;
// }
// console.log(removeFromArray([1, 2, 3, 4], 3));

// Official task solution(s)

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of the rest of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
const removeFromArray = function (array, ...args) {
  // create a new empty array
  const newArray = [];
  // use forEach to go through the array
  array.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  // and return that array
  return newArray;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// const removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

module.exports = removeFromArray;
