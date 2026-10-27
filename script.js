/**
 * Generates a random choice for the computer.
 * Uses Math.random() to divide the 0-1 range into three equal parts.
 */
function getComputerChoice() {
  const randomNumber = Math.random();
  if (randomNumber < 0.33) return 'rock';
  if (randomNumber < 0.66) return 'paper';
  return 'scissors';
}

/**
 * Prompts the user for their choice.
 * Converts the input to lowercase to ensure case-insensitive comparison.
 */
function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper, or Scissors?');
  return humanChoice.toLowerCase();
}

/**
 * Main function to run the game loop and keep track of scores.
 */
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  /**
   * Plays a single round, evaluates the winner, and updates the score.
   */
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Tie condition
    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    }
    // Human winning conditions
    else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    // Computer winning condition
    else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Play exactly 5 rounds
  for (let i = 0; i < 5; i++) {
    console.log(`\n--- Round ${i + 1} ---`);

    // Generate new choices for each round
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  // Evaluate and display the final winner
  console.log('\n=== GAME OVER ===');
  if (humanScore > computerScore) {
    console.log(
      `You won the game! Final score: Human ${humanScore} - ${computerScore} Computer`,
    );
  } else if (computerScore > humanScore) {
    console.log(
      `Computer won the game! Final score: Human ${humanScore} - ${computerScore} Computer`,
    );
  } else {
    console.log(
      `It's a tie game! Final score: Human ${humanScore} - ${computerScore} Computer`,
    );
  }
}

// Start the game
playGame();
