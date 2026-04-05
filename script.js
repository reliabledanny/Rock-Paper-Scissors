let humanScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.33) return "rock";
  if (rand < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDiv.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  }

  scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Check winner
  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore) {
      resultDiv.textContent = "🏅 You won the game!";
    } else {
      resultDiv.textContent = "💻 Computer won the game!";
    }

    // Reset game
    humanScore = 0;
    computerScore = 0;
  }
}

// Event listeners
document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("scissors"));