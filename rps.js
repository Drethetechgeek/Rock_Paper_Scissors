const options = ["rock", "paper", "scissors"];

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
}
//console.log(getComputerChoice());

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
        while(validatedInput == false){
            const choice = prompt("Rock Paper Scissors");
            if(choice == null) {
                continue;
                }
            const choiceInLower = choice.toLowerCase();
            if(options.includes(choiceInLower)) {
                validatedInput = true;
                return choiceInLower;
            }
        }
    }

    function game(){
        let scorePlayer = 0;
        let scoreComputer = 0;
        console.log("Rock Paper Scissors Shoot!")
        for(let i = 0; i < 5; i ++){
            const playerSelection = getPlayerChoice();
            const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
            if(checkWinner(playerSelection, computerSelection) === "Player"){
                scorePlayer++;
            }
            else if(checkWinner(playerSelection, computerSelection) === "Computer"){
                scoreComputer++;
            }
        }
        console.log("Game Over")
        if(scorePlayer > scoreComputer){
            console.log("Player Wins");
        }
        else if(scorePlayer < scoreComputer){
            console.log("Computer Wins");
        }
        else{
            console.log("Tie Game, Nice Try");
        }
    }

    game();

