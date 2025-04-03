let computerScore = 0;
let playerScore = 0;
let computerScoreElement = document.querySelector(".computerScore");
let playerScoreElement = document.querySelector(".playerScore");
let statusElement = document.querySelector(".status");
let roundCount = 1;
let buttons = document.querySelectorAll(".choice");
let computerChoice;
let playerChoice;
let computerChoiceElement = document.querySelector(".computerChoice");
let playerChoiceElement = document.querySelector(".playerChoice");
let resetButton = document.querySelector(".reset");
let roundCountElement = document.querySelector(".roundCountElement");

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

document.querySelector(".choices").addEventListener("click", e => {
  if (e.target.classList.contains("choice")) {
    playerChoice = e.target.textContent;
    computerChoice = getComputerChoice();
    statusElement.textContent = "";
    playRound(computerChoice, playerChoice);
  }
});

function playRound(computer, player) {
  roundCountElement.textContent = `
  round: ${roundCount}
  `;
  
  // check the round and end it if it's the fifth round and review the scores
  if (roundCount == 5) {
    
    if (playerScore > computerScore) {
      statusElement.textContent = `player won the game with the a score of [${playerScore}]`;
    } else if (computerScore > playerScore) {
      statusElement.textContent = `computer won the game with a score of [${computerScore}]`;
    } else {
      statusElement.textContent = `Tie`;
    }

    // disable the choice buttons to make the player unable to do changes to the final result
    buttons.forEach(ele => {
      ele.disabled = true;
    });
    return
  }
  
  // beginning of the round
  roundCount++;
  computerChoiceElement.textContent = `Computer chose ${computer}`;
  playerChoiceElement.textContent = `Player chose ${player}`;

  // in case of tie
  if (player == computer) {
    statusElement.textContent = "This round is Tie";
    return;
  }

  function computerWins() {
    computerScore++;
    computerScoreElement.textContent = computerScore;
    statusElement.textContent = "Computer won this round";
  }

  function playerWins() {
    playerScore++;
    playerScoreElement.textContent = playerScore;
    statusElement.textContent = "Player won this round";
  }

  // cases
  if (computer == "rock") {
    if (player == "scissors") {
      computerWins();
    } else if (player == "paper") {
      playerWins();
    }
  } else if (computer == "scissors") {
    if (player == "paper") {
      computerWins();
    } else if (player == "rock") {
      playerWins();
    }
  } else if (computer == "paper") {
    if (player == "rock") {
      computerWins();
    } else if (player == "scissors") {
      playerWins();
    }
  }
}

resetButton.addEventListener("click", () => {
  location.reload();
});
