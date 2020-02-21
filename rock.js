let playerScore = 0;
let computerScore = 0;
score = document.querySelector('#score');
roundWinner = document.querySelector('#roundWinner');
function computerPlay() { //Generates a random number between 1 and 3 then returns the corresponding sign.
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return "ROCK";
            break;
        case 2:
            return "PAPER";
            break;   
        case 3:
            return "SCISSORS";
            break;              
        }
    }
function playRound(playerSelection, computerSelection) { // goes through all the cases and returns who won.
    gameWinner.textContent = "";
    if (playerSelection == 1)  { // This is too bloated. Could be reworked with switch-statement, maybe?
        if (computerSelection == "SCISSORS") {
            playerScore++;
            roundWinner.textContent = "You win! Rock beats Scissors.";
        }
        else if (computerSelection == "PAPER") {
            computerScore++;
            roundWinner.textContent = "You loose! Paper beats Rock.";
        }
        else {
            roundWinner.textContent = "It's a tie! Both chose Rock.";
        }
    }
    else if (playerSelection == 3) {
        if (computerSelection == "PAPER") {
            playerScore++;
            roundWinner.textContent = "You win! Scissors beat Paper.";
        }
        else if (computerSelection == "ROCK") {
            computerScore++;
            roundWinner.textContent = "You loose! Rock beats Scissors.";
        }
        else {
            roundWinner.textContent = "It's a tie! Both chose Scissors.";
            }
    }
    else if (playerSelection == 2) {
        if (computerSelection == "ROCK") {
            playerScore++;
            roundWinner.textContent = "You win! Paper beats Rock.";
        }
        else if (computerSelection == "SCISSORS") {
            computerScore++;
            roundWinner.textContent = "You loose! Scissors beat Paper.";
        }
        else {
            roundWinner.textContent = "It's a tie! Both chose Paper.";
        }
    }
    else {
        return "No valid input." 
    }
 }

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
        if (playerScore == 5 || computerScore == 5) {
            score.textContent = "Player: " + playerScore + " - Computer: " + computerScore;
            gameWinner.textContent = "The game is over. Play again?"
            playerScore = 0;
            computerScore = 0;
        }
        else {
            score.textContent = "Player: " + playerScore + " - Computer: " + computerScore;
        }

      });
  });