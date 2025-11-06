function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let i = 0;
  const MAX_ROUNDS = 5;
  const roundResult = document.querySelector(`.round-result`);
  const endResultContainer = document.querySelector(`.end-result-container`);
  const endResult = document.createElement(`p`);
  const computerScoreDisplay = document.querySelector(`.computer-score`);
  const humanScoreDisplay = document.querySelector(`.user-score`);

  function resetGame() {
    humanScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
    humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
    roundResult.textContent = `Click any button to restart the game.`;
    i = 0;
    endResultContainer.removeChild(endResult);
  }

  function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return "ROCK";
    if (randomNumber === 1) return "PAPER";
    return "SCISSORS";
  }

  function playRound(humanChoice, computerChoice) {
    function determineWinner() {
      if (humanChoice === computerChoice) return `tie`;

      if (
        (humanChoice === `ROCK` && computerChoice === `SCISSORS`) ||
        (humanChoice === `PAPER` && computerChoice === `ROCK`) ||
        (humanChoice === `SCISSORS` && computerChoice === `PAPER`)
      ) {
        ++humanScore;
        return `user`;
      } else {
        ++computerScore;
        return `computer`;
      }
    }

    function adjustUi(winner) {
      humanScoreDisplay.textContent = `Your Score: ${humanScore}`;
      computerScoreDisplay.textContent = `Computer's Score: ${computerScore}`;
      if (winner === `user`) {
        roundResult.textContent = `YOU WIN! ${humanChoice} beats ${computerChoice}.`;
      } else if (winner === `tie`) {
        roundResult.textContent = `${humanChoice} and ${computerChoice} TIE!`;
      } else {
        roundResult.textContent = `YOU LOSE! ${computerChoice} beats ${humanChoice}.`;
      }
      ++i;
      if (i === MAX_ROUNDS) {
        if (humanScore > computerScore) {
          endResult.textContent = `YOU WIN THE GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`;
        } else if (computerScore > humanScore) {
          endResult.textContent = `YOU LOOSE THE GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`;
        } else {
          endResult.textContent = `TIED GAME OF 5!\nYour Score: ${humanScore}. Computer's Score: ${computerScore}`;
        }
        endResultContainer.appendChild(endResult);
      }
      if (i > MAX_ROUNDS) {
        resetGame();
      }
    }
    adjustUi(determineWinner());
  }

  const buttons = document.querySelectorAll(`.btn`);
  buttons.forEach((button) => {
    button.addEventListener(`click`, function (e) {
      let playerSelection = e.target.innerText.toUpperCase();
      playRound(playerSelection, getComputerChoice());
    });
  });
}

playGame();
