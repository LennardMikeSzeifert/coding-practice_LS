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

function removeFromArray(arr, itemToDelete) {
  arr.splice(
    arr.findIndex((item) => item === itemToDelete),
    1
  );
  return arr;
}
console.log(removeFromArray([1, 2, 3, 4], 3));
