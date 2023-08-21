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
}
};
console.log(getComputerChoice());

function checkWinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")


    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result === "Tie"){
        return "Tie Game"
    }
    else if (result === "Player"){
        return `Player has won! ${playerSelection} beats ${computerSelection}`
    }
    else 
    {
        return `Computer wins, you lose... ${computerSelection} beats ${playerSelection}`
    }
    }

    function getPlayerChoice(){
        let validatedInput = false;
        while(validatedInput = false){
            const choice = prompt("Rock Paper Scissors");
            if(choice == null) {
                continue;
            }
        }
    }

    function game(){
        console.log("Welcome!")
        for(let i = 0; i < 5; i ++){
            const playerSelection = "rock";
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        }
    }

    game();

