// Create a function called getComputerChoice.
// Store the result of Math.random() in a variable called randomNumber.
// if randomNumber is less than 0.33(the first third), return the string "rock".
// if randomNumber is less than 0.66(the second third), return the string "paper".
// neither (the last third), return the string "scissors".
function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'rock';
  } else if (randomNumber < 0.66) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// Create a function called getHumanChoice.
// Show a prompt asking the user to pick "rock", "paper", or "scissors".
// Save the user's answer in a variable called humanChoice.
// Convert humanChoice to all lowercase so it's consistent(using toLowerCase()).
// Return the humanChoice value.

function getHumanChoice() {
  let humanChoice = prompt('Pick "rock", "paper", or "scissors"');
  return humanChoice.toLowerCase();
}

// Variables to keep track of the player's score and initialization with a value of 0
humanScore = 0;
computerScore = 0;



