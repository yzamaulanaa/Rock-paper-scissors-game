// Create a function called getComputerChoice.
// Store the result of Math.random() in a variable called randomNumber.
// if randomNumber is less than 0.33(the first third), return the string "rock".
// if randomNumber is less than 0.66(the second third), return the string "paper".\
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

console.log(getComputerChoice());
