const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber){
        case 0:
        return "rock";
        break;
        case 1:
        return "scissors";
        break;
        case 2:
        return "paper";
        break;
    };
    }
console.log(getComputerChoice());

let getPlayerChoice = () => {
    prompt("Rock, Paper, or Scissors: ").toLowerCase;
}
console.log(getPlayerChoice());

/* function playRound(playerSelection,computerSelection) {
    if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "scissors" && playerSelection === "rock" || computerSelection === "paper" && playerSelection === "scissors")
    {return "Player has won!";
}
else if (computerSelection ==="scissors" && playerSelection ==="paper" || computerSelection ==="rock" && playerSelection ==="scissors" || computerSelection ==="paper" && playerSelection === "rock")
    {return "You lose, Computer wins..";
}
else {return "Tie Game"
}
}; */



const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();
// console.log(playRound(playerSelection, computerSelection))
