

function getComputerChoice() {

    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber == 0) {
        return "Rock";
    } else if (randomNumber == 1) {
        return "Paper";
    } else  {
        return "Scissor";
    }

}


function getHumanChoice() {
    let userInput = prompt("Choose Rock, Paper Scissor");


    return userInput;
    // return userInput;
}




let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();



function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            return console.log(`You both use ${humanChoice} try again!`);
        } else if (humanChoice == "Rock" && computerChoice == "Scissor") {
            console.log("You win Rock beats Scissor! ");
            return humanScore++;
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You win Paper beats Rock! ");
            return humanScore++;
        } else if (humanChoice == "Scissor" && computerChoice == "Paper") {
            console.log("You win Scissor beats Paper! ");
            return humanScore++;
        } else if (computerChoice == "Rock" && humanChoice == "Scissor") {
            console.log("Computer win Rock beats Scissor! ");
            return computerScore++;
        } else if (computerChoice == "Paper" && humanChoice == "Rock") {
            console.log("Computer win Paper beats Rock! ");
            return computerScore++;
        } else if (computerChoice == "Scissor" && humanChoice == "Paper") {
            console.log("Computer win Scissor beats Paper! ");
            return computerScore++;
        }
    }
    playRound(humanSelection,computerSelection);
}

playGame();