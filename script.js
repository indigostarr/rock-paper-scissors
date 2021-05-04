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

function endGame() {
  message.classList.remove("hidden");
  notSelected(playerScoreBoard);
  notSelected(computerScoreBoard);
  paper.removeEventListener("click", game);
  rock.removeEventListener("click", game);
  scissors.removeEventListener("click", game);
}

let playerScoreNum = 0;
let computerScoreNum = 0;

paper.addEventListener("click", game);
rock.addEventListener("click", game);
scissors.addEventListener("click", game);

newGame.addEventListener("click", () => {
  message.textContent = "Ready to Play!";
  message.classList.remove("hidden");
  playerScore.textContent = 0;
  computerScore.textContent = 0;
  showChoices(playerChoices, computerChoices);
  paper.addEventListener("click", game);
  rock.addEventListener("click", game);
  scissors.addEventListener("click", game);
});

function game(event) {
  hideMessageModal();

  let playerSelection = event.currentTarget.alt;

  for (let i = 0; i < playerChoices.length; i++) {
    if (playerSelection != playerChoices[i].alt) {
      playerChoices[i].classList.add("not-selected");
    }
  }

  let computerSelection = computerPlay();
  document.getElementById("question").src = `${computerSelection}.png`;
  rockPaperScissors(computerSelection, playerSelection);
  console.log(playerScoreNum, computerScoreNum);
  // body.font = light grey
  // add selected to player and computer
  // remove hidden on delay to a pop up

  // reset screen

  if (
    (playerScoreNum === 5 && computerScoreNum < 5) ||
    (computerScoreNum === 5 && playerScoreNum < 5)
  ) {
    endGame();
  } else {
    setTimeout(() => message.classList.remove("hidden"), 700);
    setTimeout(() => notSelected(playerScoreBoard), 750);
    setTimeout(() => notSelected(computerScoreBoard), 750);
    setTimeout(hideMessageModal, 3000);
    setTimeout(resetMatch, 3000);
  }
}

function computerPlay() {
  // use Math.random to generate 1-3
  let play = Math.floor(Math.random() * 3);

  // use the number to switch and return the name
  switch (play) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

// create a game to take computer and player inputs and declare a winner
function rockPaperScissors(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    message.textContent = `Tie you both selected ${computerSelection}`;
  } else if (
    (computerSelection === "Rock" && playerSelection === "Paper") ||
    (computerSelection === "Paper" && playerSelection === "Scissors")
  ) {
    playerScoreNum++;
    playerScore.textContent = playerScoreNum;
    if (playerScoreNum === 5) {
      message.textContent = `You win the game with 5 points!`;
      endGame();
    } else {
      message.textContent = `You win ${playerSelection} beats ${computerSelection}!`;
    }
  } else {
    computerScoreNum++;
    computerScore.textContent = computerScoreNum;
    if (computerScoreNum === 5) {
      message.textContent = `Computer wins the game with 5 points!`;
      endGame();
    } else {
      message.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
    }
  }
}
