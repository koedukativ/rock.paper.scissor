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
    playerSelection = playerSelection.toUpperCase()
    if (playerSelection == "ROCK")  { // This is too bloated. Could be reworked with switch-statement, maybe?
        if (computerSelection == "SCISSORS") {
            playerScore++;
            return "You win! Rock beats Scissors.";
        }
        else if (computerSelection == "PAPER") {
            computerScore++;
            return "You loose! Paper beats Rock.";
        }
        else {
            return "It's a tie! Both chose Rock.";
        }
    }
    else if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            playerScore++;
            return "You win! Scissors beat Paper.";
        }
        else if (computerSelection == "ROCK") {
            computerScore++;
            return "You loose! Rock beats Scissors.";
        }
        else {
            return "It's a tie! Both chose Scissors.";
            }
    }

    else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            playerScore++;
            return "You win! Paper beats Rock.";
        }
        else if (computerSelection == "SCISSORS") {
            computerScore++;
            return "You loose! Scissors beat Paper.";
        }
        else {
            return "It's a tie! Both chose Paper.";
        }
    }
    else {
        return "No valid input." 
    }
 }
function game () { 
    for (let i = 0; i < 3; i++) {
        var playerSelection = prompt("Please choose either Rock, Paper or Scissors") 
        console.log(playRound(playerSelection, computerPlay()))
        console.log("The current score is: Player: " + playerScore + " - Computer: " + computerScore)
    }
    var playerSelection = prompt("Please choose either Rock, Paper or Scissors") 
    console.log(playRound(playerSelection, computerPlay()))
    console.log("End of game. The final score is: Player: " + playerScore + " - Computer: " + computerScore)
}