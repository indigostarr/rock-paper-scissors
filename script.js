// set scores
let playerScoreNum = 0;
let computerScoreNum = 0;

// declare variables for player selection
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

// declare variables for
const message = document.querySelector(".message");

// declare variables for computer and player scoreboard
const playerScoreBoard = document.querySelectorAll("#player-score-board");
const computerScoreBoard = document.querySelectorAll("#computer-score-board");
let playerScore = document.querySelector("#player-score");
let computerScore = document.querySelector("#computer-score");

// declare variables for computer and player choices to modify opacity
let playerChoices = document.getElementsByClassName("player-choices");
let computerChoices = document.getElementsByClassName("computer-choices");

// button to start a new game of 5 rounds
let newGame = document.querySelector("button");

// function that resets opacity after each round
function showChoices(choices) {
  Array.from(choices).forEach((element) => {
    element.classList.remove("not-selected");
  });
}

// function that sets opacity to 0.5 once each round completes
function notSelected(choices) {
  Array.from(choices).forEach((element) => {
    element.classList.add("not-selected");
  });
}

// function to hide the modal message
function hideMessageModal() {
  message.classList.add("hidden");
}
setTimeout(hideMessageModal, 2000);

// function that resets opacity of the score board and anything not selected during end round screen
function resetRound() {
  setTimeout(() => message.classList.remove("hidden"), 500);
  setTimeout(() => notSelected(playerScoreBoard), 500);
  setTimeout(() => notSelected(computerScoreBoard), 500);
}

// function to end the game after 5 rounds
function endGame() {
  message.classList.remove("hidden");
  paper.removeEventListener("click", game);
  rock.removeEventListener("click", game);
  scissors.removeEventListener("click", game);
}

// create event listeners for selections
paper.addEventListener("click", game);
rock.addEventListener("click", game);
scissors.addEventListener("click", game);

// function to reset once a new game is initiated
newGame.addEventListener("click", () => {
  message.textContent = "Ready to Play!";
  message.classList.remove("hidden");
  setTimeout(hideMessageModal, 2000);
  playerScoreNum = 0;
  playerScore.textContent = 0;
  computerScoreNum = 0;
  computerScore.textContent = 0;
  showChoices(playerChoices, computerChoices);
  paper.addEventListener("click", game);
  rock.addEventListener("click", game);
  scissors.addEventListener("click", game);
});

// game based on click event input
function game(event) {
  hideMessageModal();
  showChoices(playerScoreBoard);
  showChoices(computerScoreBoard);
  showChoices(playerChoices);
  showChoices(computerChoices);

  let playerSelection = event.currentTarget.alt;

  // set opacity for choices not selected
  for (let i = 0; i < playerChoices.length; i++) {
    if (playerSelection != playerChoices[i].alt) {
      playerChoices[i].classList.add("not-selected");
    }
  }

  // create variable for computer choice
  let computerSelection = computerPlay();
  // use variable to set the img for computer
  document.getElementById("question").src = `${computerSelection}.png`;
  // use player and computer variables to play the game
  rockPaperScissors(computerSelection, playerSelection);
  console.log(playerScoreNum, computerScoreNum);
}

// create a function for the computer's to randomly select between rock, paper, scissors
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
  if (
    ((computerSelection === "Paper" && playerSelection === "Rock") ||
      (computerSelection === "Scissors" && playerSelection === "Paper") ||
      (computerSelection === "Rock" && playerSelection === "Scissors")) &&
    (playerScoreNum <= 5 || computerScoreNum <= 5)
  ) {
    computerScoreNum++;
    computerScore.textContent = computerScoreNum;
    if (computerScoreNum === 5) {
      message.textContent = `Computer wins the game with 5 points!`;
      notSelected(playerScoreBoard);
      endGame();
    } else {
      message.textContent = `Computer wins! ${computerSelection} beats ${playerSelection}`;
      resetRound();
    }
  } else if (
    ((playerSelection === "Paper" && computerSelection === "Rock") ||
      (playerSelection === "Scissors" && computerSelection === "Paper") ||
      (playerSelection === "Rock" && computerSelection === "Scissors")) &&
    (playerScoreNum < 5 || computerScoreNum < 5)
  ) {
    playerScoreNum++;
    playerScore.textContent = playerScoreNum;
    if (playerScoreNum >= 5) {
      message.textContent = `You win the game with 5 points!`;
      notSelected(computerScoreBoard);
      endGame();
    } else {
      message.textContent = `You win ${playerSelection} beats ${computerSelection}!`;
      resetRound();
    }
  } else {
    message.textContent = `Tie you both selected ${computerSelection}`;
    resetRound();
  }
}
