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


// Step Four

