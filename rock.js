let playerScore = 0
let computerScore = 0
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
    if (playerSelection == 1)  { // This is too bloated. Could be reworked with switch-statement, maybe?
        if (computerSelection == "SCISSORS") {
            playerScore++;
            alert("You win! Rock beats Scissors.");
        }
        else if (computerSelection == "PAPER") {
            computerScore++;
            alert("You loose! Paper beats Rock.");
        }
        else {
            alert("It's a tie! Both chose Rock.");
        }
    }
    else if (playerSelection == 3) {
        if (computerSelection == "PAPER") {
            playerScore++;
            alert("You win! Scissors beat Paper.");
        }
        else if (computerSelection == "ROCK") {
            computerScore++;
            alert("You loose! Rock beats Scissors.");
        }
        else {
            alert("It's a tie! Both chose Scissors.");
            }
    }
    else if (playerSelection == 2) {
        if (computerSelection == "ROCK") {
            playerScore++;
            alert("You win! Paper beats Rock.");
        }
        else if (computerSelection == "SCISSORS") {
            computerScore++;
            alert("You loose! Scissors beat Paper.");
        }
        else {
            alert("It's a tie! Both chose Paper.");
        }
    }
    else {
        return "No valid input." 
    }
 }
/*function game () { 
    for (let i = 0; i < 3; i++) {
        var playerSelection = prompt("Please choose either Rock, Paper or Scissors") 
        console.log(playRound(playerSelection, computerPlay()))
        console.log("The current score is: Player: " + playerScore + " - Computer: " + computerScore)
    }
    var playerSelection = prompt("Please choose either Rock, Paper or Scissors") 
    console.log(playRound(playerSelection, computerPlay()))
    console.log("End of game. The final score is: Player: " + playerScore + " - Computer: " + computerScore)
}*/ //game function deadtivated for now

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
        playRound(button.id, computerPlay());
      });
  });