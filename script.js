// create console game to later be modified into

// create a function for the computer
// randomly select between rock, paper, scissors

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

function playerPlay() {
  let play = prompt("Rock, Paper or Scissors").toLowerCase();

  if (play === "rock" || play === "paper" || play === "scissors") {
    return play;
  } else {
    alert("Try again and select from Rock, Paper or Scissors");
    playerPlay();
  }
}

const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playerSelection);

// create a game to take computer and player inputs and declare a winner
function rockPaperScissors(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    console.log("Tie");
  } else if (
    (computerSelection === "rock" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "scissors")
  ) {
    console.log("Player beats Computer");
  } else {
    console.log("Computer beats player");
  }
}
rockPaperScissors(computerSelection, playerSelection);
