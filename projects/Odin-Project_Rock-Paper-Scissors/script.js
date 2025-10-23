// Task 1

//write a function that makes the computer randomly display “rock”, “paper” or “scissors”.

/*

- The program is completley played in the browser console and thus doesn't require a UI.
- The user will input their choice of “rock”, “paper” or “scissors”. Then click "start " you ask the computer to make its choice.
- The computer has to randomly output either “rock”, “paper” or “scissors”.
- The user clicking start activates the random number calculation of the computer. The computer then just has to define either “rock”, “paper” or “scissors” from that number.

pseudocode:

When the user inputs “rock”, “paper” or “scissors”
randomly choose a number between 1 and 3
assign that number to “rock”, “paper” or “scissors”
output “rock”, “paper” or “scissors”
*/

function getComputerChoice() {
Math.floor(Math.random() _ 3) + 1 === 1;
if (Math.floor(Math.random() _ 3) + 1 === 1) {
return `ROCK`;
} else if (Math.floor(Math.random() \* 3) + 1 === 2) {
return `PAPER`;
} else {
return `SCISSORS`;
}
}

getComputerChoice();

// Task 2

//write a function that takes the user's choice and ouputs it

/*

- The program is completley played in the browser console and thus doesn't require a UI.
- The user will input their choice of “rock”, “paper” or “scissors”. Then click "start " you ask the computer to make its choice.
- The computer has to randomly output either “rock”, “paper” or “scissors”.
- The user clicking start activates the random number calculation of the computer. The computer then just has to define either “rock”, “paper” or “scissors” from that number.

pseudocode:

When the user inputs “rock”, “paper” or “scissors”

randomly choose a number between 1 and 3
assign that number to “rock”, “paper” or “scissors”
output “rock”, “paper” or “scissors”
*/


function getHumanChoice() {
userInput = prompt(`Please choose: ROCK, PAPER OR SCISSORS`);

if (userInput === `ROCK`) {
    return `Rock`;
}
else if (userInput === `PAPER`) {
    return `Paper`;
}

else {
    return `SCISSORS`;
}
}

getHumanChoice();