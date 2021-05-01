// create console game to later be modified into

// create a function for the computer
// randomly select between rock, paper, scissors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.querySelector(".message");
let playerScoreBoard = document.querySelector("#player-score");
let computerScoreBoard = document.querySelector("#computer-score");

paper.addEventListener("click", playerPlay);
rock.addEventListener("click", playerPlay);

let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function playerPlay(event) {
  let play = event.currentTarget.alt;

  playerSelection = play;
  computerSelection = computerPlay();
  console.log(playerSelection);
  console.log(computerSelection);
  rockPaperScissors(computerSelection, playerSelection);
}

function computerPlay() {
  // use Math.random to generate 1-3
  play = Math.floor(Math.random() * 3);

  // use the number to switch and return the name
  switch (play) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// create a game to take computer and player inputs and declare a winner
function rockPaperScissors(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    message.textContent = "Tie";
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    message.textContent = "Player beats Computer";
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else {
    message.textContent = "Computer beats player";
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
}
