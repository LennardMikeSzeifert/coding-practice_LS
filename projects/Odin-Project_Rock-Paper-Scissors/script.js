function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "ROCK";
    if (randomNumber === 1) return "PAPER";
    return "SCISSORS";
  }

  function getHumanChoice() {
    let userInput = prompt(
      `Please choose: ROCK, PAPER OR SCISSORS`
    ).toUpperCase();

    if (userInput === `ROCK`) {
      return `ROCK`;
    } else if (userInput === `PAPER`) {
      return `PAPER`;
    } else {
      return `SCISSORS`;
    }
  }

  function playRound(humanChoice, computerChoice) {
    if (
      (humanChoice === `ROCK` && computerChoice === `SCISSORS`) ||
      (humanChoice === `PAPER` && computerChoice === `ROCK`) ||
      (humanChoice === `SCISSORS` && computerChoice === `PAPER`)
    ) {
      ++humanScore;
      alert(
        `YOU WIN! ${humanChoice} beats ${computerChoice}.\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
      );
    } else if (humanChoice === computerChoice) {
      alert(
        `${humanChoice} and ${computerChoice} TIE! Try again!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
      );
    } else {
      ++computerScore;
      alert(
        `YOU LOSE! ${computerChoice} beats ${humanChoice}.\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
      );
    }
  }
  playRound(getHumanChoice(), getComputerChoice());

  // Play 5 rounds

  // for (let i = 0; i < 5; i++) {
  //   playRound(getHumanChoice(), getComputerChoice());
  // }

  // if (humanScore > computerScore) {
  //   alert(
  //     `YOU WIN THE GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
  //   );
  // } else if (computerScore > humanScore) {
  //   alert(
  //     `YOU LOOSE THE GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
  //   );
  // } else {
  //   alert(
  //     `TIED GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`
  //   );
  // }
}

playGame();
