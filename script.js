// create console game to later be modified into

// create a function for the computer
// randomly select between rock, paper, scissors
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const message = document.querySelector(".message");
const body = document.querySelector("body");
const playerScoreBoard = document.querySelectorAll("#player-score-board");
const computerScoreBoard = document.querySelectorAll("#computer-score-board");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");
let playerChoices = document.getElementsByClassName("player-choices");
let computerChoices = document.getElementsByClassName("computer-choices");
let newGame = document.querySelector("button");

function showChoices(choices) {
  Array.from(choices).forEach((element) => {
    element.classList.remove("not-selected");
  });
}

function resetMatch() {
  showChoices(playerScoreBoard);
  showChoices(computerScoreBoard);
  showChoices(playerChoices);
  showChoices(computerChoices);
}

function notSelected(choices) {
  Array.from(choices).forEach((element) => {
    element.classList.add("not-selected");
  });
}

function hideMessageModal() {
  message.classList.add("hidden");
}

let playerScoreNum = 0;
let computerScoreNum = 0;

body.addEventListener("click", hideMessageModal);
paper.addEventListener("click", playerPlay);
rock.addEventListener("click", playerPlay);
scissors.addEventListener("click", playerPlay);

newGame.addEventListener("click", () => {
  message.textContent = "Ready to Play!";
  message.classList.remove("hidden");
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  showChoices(playerChoices, computerChoices);
});

function playerPlay(event) {
  let playerSelection = event.currentTarget.alt;

  for (let i = 0; i < playerChoices.length; i++) {
    if (playerSelection != playerChoices[i].alt) {
      playerChoices[i].classList.add("not-selected");
    }
  }

  let computerSelection = computerPlay();
  document.getElementById("question").src = `"${computerSelection}.png"`;
  console.log(
    (document.getElementById("question").src = `${computerSelection}.png`)
  );
  notSelected(playerScoreBoard);
  notSelected(computerScoreBoard);
  rockPaperScissors(computerSelection, playerSelection);

  // body.font = light grey
  // add selected to player and computer
  // remove hidden on delay to a pop up

  // reset screen
  setTimeout(() => message.classList.remove("hidden"), 700);
  setTimeout(hideMessageModal, 3000);
  setTimeout(resetMatch, 3000);
}

function computerPlay() {
  // use Math.random to generate 1-3
  let play = Math.floor(Math.random() * 3);

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
    message.textContent = "You win!";
    playerScoreNum++;
    playerScore.textContent = playerScoreNum;
  } else {
    message.textContent = "Computer wins!";
    computerScoreNum++;
    computerScore.textContent = computerScoreNum;
  }
}
