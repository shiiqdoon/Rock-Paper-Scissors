// Step One

const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice () {
    let randomOption = Math.floor(Math.random()*options.length);
    return options[randomOption];

}
console.log(getComputerChoice());



// Step Two

function getHumanChoice () {
    let humanInput = prompt("Enter Rock, Paper or Scissors");
    return humanInput;
}
console.log (getHumanChoice());



// Step Three

//let computerScore = 0;
//let humanScore = 0;

// Step Four

//const humanSelection = getHumanChoice().toLowerCase();
//const computerSelection = getComputerChoice().toLowerCase();


//Step Five


function playGame () {
    let humanScore = 0;
    let computerScore = 0;
    function playRound (humanSelection, computerSelection) {
            if (humanSelection == "rock" && computerSelection == "scissors") {
                console.log ("You won! Rock beats scissors");
                humanScore++;
            }
    
            else if (humanSelection == "scissors" && computerSelection == "rock") {
                console.log ("You lost! Rock beats scissors");
                computerScore++;
            }
            else if (humanSelection == "scissors" && computerSelection == "paper") {
                console.log ("You won! scissors beats paper");
                humanScore++;
            }
            else if (humanSelection == "paper" && computerSelection == "scissors") {
                console.log ("You lost! scissors beats paper");
                computerScore++;
            }
            else if (humanSelection == "paper" && computerSelection == "rock") {
                console.log ("You won! paper beats rock");
                humanScore++
    
            }
            else if (humanSelection == "rock" && computerSelection == "paper") {
                console.log ("You lost! paper beats rock");
                computerScore++;
            }
            else if (humanSelection == computerSelection) {
                console.log ("DRAW!");
            }
            else {
                console.log ("Invalid!")
                computerScore++;
            }
        }    
for (i=1; i<=5; i++)  {
    console.log (i);
    const computerSelection = getComputerChoice().toLowerCase();
    const humanSelection= getHumanChoice().toLowerCase();
    playRound(humanSelection, computerSelection);
    console.log (`score=> You: ${humanScore} Computer:${computerScore}`);
}
console.log ("----Game Over-----");
if (humanScore>computerScore) {
    console.log ("You Win The Game");
}
else if (humanScore<computerScore) {
    console.log ("You Lost The Game");
}
else if (humanScore==computerScore) {
    console.log ("Its A Draw  ");
}
}
console.log (playGame());