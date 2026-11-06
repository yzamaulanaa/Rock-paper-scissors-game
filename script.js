function getComputerChoice() {
  const randomNumber = Math.random();
  const ROCK_THRESHOLD = 0.33;
  const PAPER_THRESHOLD = 0.66;

  if (randomNumber < ROCK_THRESHOLD) return 'rock';
  if (randomNumber < PAPER_THRESHOLD) return 'paper';
  return 'scissors';
}

function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper, or Scissors?');
  return humanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log('\n=== GAME OVER ===');
  const finalScoreString = `Final score: Human ${humanScore} - ${computerScore} Computer`;

  if (humanScore > computerScore) {
    console.log(`You won the game! ${finalScoreString}`);
  } else if (computerScore > humanScore) {
    console.log(`Computer won the game! ${finalScoreString}`);
  } else {
    console.log(`It's a tie game! ${finalScoreString}`);
  }
}

playGame();
